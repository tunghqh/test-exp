import React from "react";

import "./Content.scss";
import StartNow from "../../assets/imgs/startnow.png";
import Car2 from "../../assets/imgs/car2.png";
import Img from "../../assets/imgs/img.png";
import Img2 from "../../assets/imgs/img2.png";
import icon1 from "../../assets/imgs/icon1.png";
import icon2 from "../../assets/imgs/icon2.png";
import icon3 from "../../assets/imgs/icon3.png";

function Content() {
  return (
    <div className="content">
      <img src={StartNow} alt="" className="content__stn" />
      <div className="content__mid">
        <img src={Car2} alt="car" className="content__mid-img" />
        <div className="content__mid-right">
          <div>
            <img src={icon1} alt="" className="content__mid-icon" />
            <div className="content__mid-title">
              The larget/first pattern marketplace for automotive film
              professiobals in the world
            </div>
          </div>
        </div>
        <div className="content__mid-right" style={{ background: "none" }}>
          <div>
            <img src={icon2} alt="" className="content__mid-icon" />
            <div className="content__mid-title">
              Search for thousands of automotive patterns, customize to fit your
              needs, and plot online any film regardless of brand!
            </div>
            <p className="contenr__mid-des">
              Donec vitae porta sapien, nec dictum sapien. Vivamus interdum
              dolor a ullamcorper congue. Curabitur non eleifend enim.
            </p>
          </div>
        </div>
        <img src={Img} alt="car" className="content__mid-img" />
        <img src={Img2} alt="car" className="content__mid-img" />
        <div className="content__mid-right">
          <div>
            <img src={icon3} alt="" className="content__mid-icon" />
            <div className="content__mid-title">
              Easily upload your own patterns and start making money now!
            </div>
            <p className="contenr__mid-des">
              Donec vitae porta sapien, nec dictum sapien. Vivamus interdum
              dolor a ullamcorper congue. Curabitur non eleifend enim.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
