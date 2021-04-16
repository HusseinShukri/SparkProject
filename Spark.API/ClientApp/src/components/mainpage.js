import React from "react";
import './pages/MainPage/main.css'
import Banner from "./pages/MainPage/Banner";
import Nav from "./pages/MainPage/Nav";
import Services from "./pages/MainPage/Services";
import About from "./pages/MainPage/About";
import Prices from "./pages/MainPage/Prices";
import Contact from "./pages/MainPage/Contact";

function Apap() {
  return (
    <div>
        <Nav />
      <Banner />
      <Services />
      <About />
      <Prices />
    </div>
  );
}

export default Apap;
