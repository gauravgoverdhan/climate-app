import React from "react";
import Header from "./Header";
import "../assets/HomePage.css";

export default function About(props) {
  return (
    <div className="Features">
      <Header features={true} />
      <div className="containerFluid">
        <div className="container mt-5">
          <div className="row" style={{ marginBottom: 90 }}>
            <div className="col-4">
              <div class="card">
                <img
                  class="card-img-top"
                  src="https://imgur.com/Gkh9btm.png"
                  alt="Image1"
                ></img>
                <div class="card-body">
                  <h5 class="card-title">Rishav Naskar</h5>
                  <p class="card-text">Registration Number - 19BCE2324</p>
                  <a
                    href="https://www.linkedin.com/in/rishav-naskar-9621101a6/"
                    class="btn btn-primary"
                  >
                    Linkedin
                  </a>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div class="card">
                <img
                  class="card-img-top"
                  src="https://imgur.com/2yPCNBy.png"
                  alt="Image1"
                ></img>
                <div class="card-body">
                  <h5 class="card-title">Gaurav Goverdhan</h5>
                  <p class="card-text">Registration Number - 19BCE2685</p>
                  <a
                    href="https://www.linkedin.com/in/gauravgoverdhan/"
                    class="btn btn-primary"
                  >
                    Linkedin
                  </a>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div class="card">
                <img
                  class="card-img-top"
                  src="https://imgur.com/6AYRc93.png"
                  alt="Image1"
                ></img>
                <div class="card-body">
                  <h5 class="card-title">Lakshmi Priya</h5>
                  <p class="card-text">Registration Number - 19BCI0203</p>
                  <a
                    href="https://www.linkedin.com/in/"
                    class="btn btn-primary"
                  >
                    Linkedin
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
