import React, { useEffect } from "react";
import lottie from "lottie-web";
import Header from "./Header";
import weatherLogo from "../assets/4792-weather-stormshowersday.json";
import "../assets/HomePage.css";

export default function HomePage(props) {
    useEffect(() => {
        lottie.loadAnimation({
            container: document.querySelector("#weather-logo"),
            animationData: weatherLogo
        });
    }, []);

    return (
        <div className="HomePage">
            <Header homepage={true} />
            <div className="container-fluid">
                {/* <h1 className="app-heading">Weather App</h1> */}
                <div id="weather-logo" />
                <h1 className="app-heading">Weather App</h1>
            </div>
        </div>
    );
}