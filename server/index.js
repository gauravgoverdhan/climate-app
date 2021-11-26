require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = parseInt(process.env.SALT_ROUNDS);
const axios = require("axios");

const app = express();

// app.use(express.urlencoded({
//     extended: true
// }));
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/weatherDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const userSchema = new mongoose.Schema ({
    email: String,
    password: String,
    firstname: String,
    lastname: String,
    username: String,
    city: String,
    country: String
});

const User = mongoose.model("User", userSchema);

app.post("/register", (req, res) => {
    console.log(req.body);
    User.findOne({email: req.body.email}, (err, foundUser) => {
        if (foundUser) {
            console.log("User already exists");
            res.json({
                isRegistered: false
            });
        } else {
            bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
                const newUser = new User ({
                    email: req.body.email,
                    password: hash,
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    username: req.body.username,
                    city: req.body.city,
                    country: req.body.country
                });
                newUser.save((err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("User created");
                        res.json({
                            isRegistered: true
                        });
                    }
                })
            });
        }
    });
});

app.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email: email}, (err, foundUser) => {
        if (err) {
            console.log(err);
        } else {
        if (foundUser) {
                bcrypt.compare(password, foundUser.password, (err, result) => {
                    if (result === true) {
                        res.json({
                            username: foundUser.username,
                            city: foundUser.city,
                            country: foundUser.country,
                            isLogged: "true"
                        });
                    } else {
                        res.json({
                            isLogged: "false"
                        });
                    }
                });
            } else {
                res.json({
                    isLogged: "exists"
                });
            }
        }
    });
});

app.get("/dashboard", async (req, res) => {
    const city = req.query.city;
    // const country = req.query.country;
    // const geolocRes = await axios.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + city + ",+" + country + "&key=" + process.env.GOOGLE_API_KEY);
    const geolocRes = await axios.get("https://geocode.xyz/" + city + "?json=1&auth=" + process.env.GEOCODE_AUTH_KEY);
    // console.log(geolocRes.data);
    const { latt, longt, standard: { countryname: country } } = geolocRes.data;
    const weatherRes = await axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=" + latt + "&lon=" + longt + "&units=metric&appid=" + process.env.OPEN_WEATHER_API_KEY);
    console.log(weatherRes.data);
    console.log(latt + " " + longt);
    res.json(weatherRes.data);
}); 

let port = process.env.PORT;
if (port == null || port == "")
    port = 3001;
    
app.listen(port, () => {
    console.log("Server started on port " + port);
});