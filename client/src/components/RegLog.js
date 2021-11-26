import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";
import "../assets/RegLog.css";
import axios from "axios";

const server = axios.create({
    baseURL: "http://localhost:3001"
});

export default function RegLog(props) {
    const [inputs, setInputs] = useState({
        firstname: "",
        lastname: "",
        email: "",
        username: "",
        password: "",
        repassword: "",
        city: "",
        country: ""
    });

    const history = useHistory();

    const handleChange = (event) => {
        const {name, value} = event.target;
        setInputs((values) => {
            return ({
                ...values,
                [name]: value
            });
        });
    }

    function validate(event) {
        event.preventDefault();
        if (!props.login) {
            console.log("In validate");
            const emailRe = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            const passRe = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
            if (!emailRe.test(inputs.email)) {
                alert("Invalid email id.");
            } else if (!passRe.test(inputs.password)) {
                alert("Password must contain atleast 1 number, special character, and should be greater than 8 and less than 18 characters long.");
            } else if (inputs.password !== inputs.repassword) {
                alert("Passwords don't match.");
            } else {
                handleSubmit(event);
            }
        } else {
            handleSubmit(event);
        }
    }

    async function handleSubmit(event) {
        event.preventDefault();
        // console.log(inputs);
        const res = await server.post("/" + (props.login ? "login" : "register"), inputs);
        // console.log(res.data);
        if (props.login) {
            if (res.data.isLogged === "true")
                history.push({
                    pathname: "/dashboard",
                    state: {
                        username: res.data.username,
                        city: res.data.city,
                        country: res.data.country,
                        isLogged: true
                    }
                });
            else if (res.data.isLogged === "false")
                alert("Incorrect credentials.");
            else 
                alert("User does not exist. Please register.");
        } else {
            if (res.data.isRegistered) 
                history.push({
                    pathname: "/dashboard",
                    state: {
                        username: inputs.username,
                        city: inputs.city,
                        country: inputs.country,
                        isLogged: true
                    }
                });
            else
                alert("User already exists. Please login.");
        } 
    }

    return (
        <div className="RegLog">
            <Header homepage={false} />
            <div className="container p-5">
                <form onSubmit={validate}>
                    <div className="row">
                        {!props.login && 
                            <div className="col-6">
                                <label htmlFor="firstname" className="form-label mb-1">First name</label>
                                <input type="text" className="form-control form-control-sm mb-0" id="firstname" name="firstname" onChange={handleChange} value={inputs.firstname} required /><br />
                            </div>
                        }
                        {!props.login && 
                            <div className="col-6">
                                <label htmlFor="lastname" className="form-label mb-1">Last name</label>
                                <input type="text" className="form-control form-control-sm mb-0" id="lastname" name="lastname" onChange={handleChange} value={inputs.lastname} required /><br />
                            </div>
                        }
                        <div className="col-12">
                            <label htmlFor="email" className="form-label mb-1">Email</label>
                            <input type="email" className="form-control form-control-sm mb-0" id="email" name="email" onChange={handleChange} value={inputs.email} required /><br />
                        </div>
                        {!props.login && 
                            <div className="col-12">
                                <label htmlFor="username" className="form-label mb-1">Username</label>
                                <input type="text" className="form-control form-control-sm mb-0" id="username" name="username" onChange={handleChange} value={inputs.username} required /><br />
                            </div>
                        }
                        <div className="col-12">
                            <label htmlFor="password" className="form-label mb-1">Password</label>
                            <input type="password" className="form-control form-control-sm mb-0" id="password" name="password" onChange={handleChange} value={inputs.password} required /><br />
                        </div>
                        {!props.login && 
                        <div className="col-12">
                        <label htmlFor="repassword" className="form-label mb-1">Re-enter Password</label>
                        <input type="password" className="form-control form-control-sm mb-0" id="repassword" name="repassword" onChange={handleChange} value={inputs.repassword} required /><br />
                    </div>
                        }
                        {!props.login && 
                        <div className="col-6">
                            <label htmlFor="city" className="form-label mb-1">City</label>
                            <input type="text" className="form-control form-control-sm mb-0" id="city" name="city" onChange={handleChange} value={inputs.city} required /><br />
                        </div>
                        }
                        {!props.login && 
                        <div className="col-6">
                            <label htmlFor="country" className="form-label mb-1">Country</label>
                            <input type="text" className="form-control form-control-sm mb-0" id="country" name="country" onChange={handleChange} value={inputs.country} required /><br />
                        </div>
                        }
                        <div className="col-12">
                            <button type="submit" className="btn btn-light">{props.login ? "Login" : "Register"}</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}