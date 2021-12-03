import React from "react";
import Header from "./Header";
import "../assets/HomePage.css";

export default function Features(props) {
  return (
    <div className="Features">
      <Header features={true} />
      <div className="containerFluid">
        <div className="container mt-5">
          <div className="row" style={{ marginBottom: 90 }}>
            <div className="col-2">
              <img
                src="https://imgur.com/ymObSsr.png"
                className="imageFluid rounded-pill"
                alt="Image1"
                height={100}
              ></img>{" "}
            </div>
            <div className="col-sm-8 text-center m-4 text-light font-weight-bold">
              <strong className="text-light">Home Page</strong> - Three actions
              are included on the home page. First, directly accessing the
              weather report by entering the location without sign in. Secondly,
              to log in if previously signed up or simply sign up to access all
              the features of the application. And lastly is to visit the
              Features and About page respectively.
            </div>
          </div>
          <div className="row" style={{ marginBottom: 90 }}>
            <div className="col-2">
              <img
                src="https://imgur.com/0o8hMLc.png"
                className="imageFluid rounded-pill"
                alt="Image1"
                height={100}
              ></img>{" "}
            </div>
            <div className="col-sm-8 text-center m-4 text-light text-right">
              <strong className="text-light">Login / Sign Up Page</strong> - In
              this page, any user can either choose to login using their email
              address and password if already registered. In case the user has
              not registered before, the user has to input his first and last
              name, his email, his chosen password and city to register in our
              application.
            </div>
          </div>
          <div className="row" style={{ marginBottom: 70 }}>
            <div className="col-2">
              <img
                src="https://imgur.com/FjmBwsB.png"
                className="imageFluid rounded-pill"
                alt="Image1"
                height={100}
              ></img>{" "}
            </div>
            <div className="col-sm-8 text-center m-4 text-light font-weight-bold">
              <strong>Weather Page</strong> - This is the main page where the
              user lands up once he tries to look up the weather. This page
              displays all the weather information including temperature,
              precipitation, humidity levels and other information which might
              be important to the user. This page is designed in a very
              illustrated manner to visualize things in a better way.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
