import React, { useState } from "react";

import "./Hero.scss";

import Button from "../Button";

import Heroimg from "../../assets/imgs/hero.png";
import Reset from "../../assets/imgs/icon_reset.svg";
import Menu from "../MenuNoScroll/Menu";
import MenuScroll from "../MenuScroll/MenuScroll";

function Hero() {
  const [selectedLocation, setSelectedLocation] = useState("Select Location");
  const [selectedYear, setSelectedYear] = useState("Select Year");
  return (
    <div className="hero">
      <img src={Heroimg} alt="hero" className="hero__img" />
      <div className="hero__header">
        Find Your Paint Protection Film Cutting File.
      </div>
      <div className="hero__filter">
        <div className="hero__filter-list">
          <div className="hero__filter-item" style={{ border: "none" }}>
            <p>Location</p>
            <Menu
              selectedLocation={selectedLocation}
              setSelectedLocation={setSelectedLocation}
            />
          </div>
          <div className="hero__filter-item">
            <p>Year</p>
            <MenuScroll
              selectedYear={selectedYear}
              setSelectedYear={setSelectedYear}
            />
          </div>
          <div className="hero__filter-item">
            <p>Make</p>
            <p>Select Make</p>
          </div>
          <div className="hero__filter-item">
            <p>Model</p>
            <p>Select Model</p>
          </div>
          <div className="hero__filter-item">
            <p>Sub-Model</p>
            <p>Select Sub-Model</p>
          </div>
          <div className="hero__filter-item">
            <p>Series</p>
            <p>Select Series</p>
          </div>
        </div>
        <div className="hero__filter-btn">
          <Button
            text
            onClick={() => {
              setSelectedLocation("Select Location");
              setSelectedYear("Select Year");
            }}
          >
            <img src={Reset} alt="icon" />
            RESET
          </Button>
          <Button rounded onClick={()=>{console.log(selectedLocation,selectedYear)}}>SEARCH</Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
