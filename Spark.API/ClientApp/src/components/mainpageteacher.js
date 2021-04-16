import React from "react";
import './pages/MainPage/main.css'
import Banner from "./pages/MainPageT/Banner";
import Nav from "./pages/MainPageT/Nav";
import About from "./pages/MainPageT/About";
import Pol from "./pages/MainPageT/Polices";

function Apap() {
  return (
    <div>
        <Nav />
      <Banner />
      <About />
      <Pol />

    </div>
  );
}

export default Apap;
