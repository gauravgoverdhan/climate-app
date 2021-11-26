import React from "react";
import { Route } from "react-router-dom";
import "../assets/App.css";
import HomePage from "./HomePage";
import RegLog from "./RegLog";
import DashBoard from "./DashBoard";
import Features from "./Features";
import About from "./About";

export default function App() {
  return (
    <div className="App">
      <Route path="/" exact component={HomePage} />
      <Route path="/register"><RegLog login={false} /></Route>
      <Route path="/login"><RegLog login={true} /></Route>
      <Route path="/dashboard"><DashBoard /></Route>
      <Route path="/features"><Features /></Route>
      <Route path="/about"><About /></Route>
    </div> 
  );
}