import React from "react";
import Header from "./Header";
import "../assets/HomePage.css"

export default function Features(props) {
    return (
        <div className="Features">
            <Header features={true} />
            <div className="container-fluid">
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
                <h1 className="app-heading">Sign up to access all features</h1>
            </div>
        </div>
    );
}