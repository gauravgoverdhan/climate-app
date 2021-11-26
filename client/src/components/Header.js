import React from "react";
import { Link } from "react-router-dom";
import "../assets/Header.css";
import { useHistory } from "react-router-dom";

export default function Header(props) {
    const [city, setCity] = React.useState("");

    const history = useHistory();

    function handleChange(event) {
        setCity(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        history.push({
            pathname: "/dashboard",
            state: {
                username: "Guest",
                city: city,
                country: "",
                isLogged: false
            }
        });
    }

    return (
        <div className="Header">
            <header className="p-3 bg-dark text-white">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                            <img className="app-logo" src="./favicon.ico" alt="weather-icon" /> 
                        </Link>

                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><Link to="/" className={props.homepage ? "nav-link px-2 text-secondary" : "nav-link px-2 text-white"}>Home</Link></li>
                            <li><Link to="/features" className={props.features ? "nav-link px-2 text-secondary" : "nav-link px-2 text-white"}>Features</Link></li>
                            <li><Link to="/about" className={props.about ? "nav-link px-2 text-secondary" : "nav-link px-2 text-white"}>About</Link></li>
                        </ul>
                        {
                            !props.dash &&
                            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" onSubmit={handleSubmit}>
                                <input type="search" className="form-control form-control-dark" placeholder="Enter City" onChange={handleChange} name="city" value={city} />
                            </form>
                        }

                        {
                            props.dash && (
                                <div className="text-end">
                                    <p id="greeting">Hi, {props.username}</p>
                                    {props.isLogged && <Link to="/" type="button" className="btn btn-outline-light me-2">Sign out</Link>}   
                                </div>
                            ) 
                        }
                        {
                            !props.isLogged && (
                                <div className="text-end">
                                    <Link to="/login" type="button" className="btn btn-outline-light me-2">Login</Link>
                                    <Link to="/register" type="button" className="btn btn-warning">Sign-up</Link>
                                </div>
                            ) 
                        }                                       
                    </div>
                </div>
            </header>
        </div>
    );
}