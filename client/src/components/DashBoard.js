import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "../assets/DashBoard.css";

export default function DashBoard(props) {
    const location = useLocation({});
    const [weatherRes, setWeatherRes] = useState(null);
    const [weatherImg, setWeatherImg] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:3001/dashboard?city=" + location.state.city + "&country=" + location.state.country).then(res => {
            setWeatherRes(res.data);
            // console.log(weatherRes);
            // console.log(res.data.current.weather[0].icon);
            setWeatherImg("http://openweathermap.org/img/wn/" + res.data.current.weather[0].icon + "@2x.png")
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!weatherRes)
        return null;
    if (!weatherRes.current)
        return null;
    if (!weatherRes.current.temp)
        return null;
    if (!weatherImg) 
        return null;

    return (
        <div className="DashBoard">
            <Header isLogged={location.state.isLogged} dash={true} username={location.state.username} />
            <div className="container p-3 bg-light rounded-3">
                <h2>Today's Weather</h2><br />
                <div className="row">
                    <div className="col-lg-6">
                        <h3>Location: {location.state.city}</h3>
                        <h3>Current Temperature: {weatherRes.current.temp} C</h3>
                        <h3>Humidity: {weatherRes.current.humidity} %</h3>
                        <h3>Precipitation: {weatherRes.minutely[0].precipitation} mm</h3>
                    </div>
                    <div className="col-lg-6 curr-weather-col-2">
                        <img src={weatherImg} alt="Data Not Found" /><br />
                        <h3 className="curr-status">Current Status: {weatherRes.current.weather[0].main}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}