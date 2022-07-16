import React from "react";

import "./FilmList.scss";

import Button from '../Button'
import bedge from "../../assets/imgs/bedge.png";
import sticker from "../../assets/imgs/icon_sticker.svg";
import item1 from "../../assets/imgs/item1.svg";
import item2 from "../../assets/imgs/item2.svg";
import item3 from "../../assets/imgs/item3.svg";
import car from "../../assets/imgs/car.png";
import avt1 from "../../assets/imgs/avt1.png";
import avt2 from "../../assets/imgs/avt2.png";
import avt3 from "../../assets/imgs/avt3.png";
import avt4 from "../../assets/imgs/avt4.png";
import avt5 from "../../assets/imgs/avt5.png";
import avt6 from "../../assets/imgs/avt6.png";
import {AiFillStar} from 'react-icons/ai'

function FilmList() {
  return (
    <div className="filmlist">
      <h2 className="filmlist__head">NEW PROTECTION FILM LIST</h2>
      <div className="filmlist__list">
          <div className="filmlist__item">
            <img src={bedge} alt="bedge" className="bedge"/>
            <div className="item__top">
              <span>Upload date : 2021. 12. 01</span>
              <div className="sticker">
                <img src={sticker} alt="" />
              </div>
            </div>
            <div className="item__mid">
              <img src={car} alt="item" className="item__mid-img" />
              <div className="item__mid-title">
                CANADA & USA {">"} 2021 {">"} TOYOTA {">"}
                CAMRY {">"} XLE HYBRID
              </div>
                <div className="item__mid-type">
                    OUT FRONTS {">"} BUMPER
                </div>
            </div>
            <div className="item__bot">
                <ul className="item__bot-star">
                    <li><AiFillStar /></li>
                    <li><AiFillStar /></li>
                    <li><AiFillStar /></li>
                    <li><AiFillStar /></li>
                    <li className="start__disable"><AiFillStar /></li>
                </ul>
                <div className="item__bot-info">
                    <p>20 Credit</p>
                    <p>60 downloads</p>
                </div>
            </div>
            <div className="item__credit">
                <div className="item__credit-left">
                    <img src={avt1} alt="" className="item__credit-avt"/>
                    <span>By carlover</span>
                </div>
                <div className="item__credit-right">
                    <img src={item1} alt="" />
                    <p>Beginner</p>
                </div>
            </div>
          </div>
          <div className="filmlist__item">
            <div className="item__top">
              <span>Upload date : 2021. 11. 29</span>
              <div className="sticker sticker__disable">
                <img src={sticker} alt="" />
              </div>
            </div>
            <div className="item__mid">
              <img src={car} alt="item" className="item__mid-img" />
              <div className="item__mid-title">
                CANADA & USA {">"} 2021 {">"} TOYOTA {">"}
                CAMRY {">"} XLE HYBRID
              </div>
                <div className="item__mid-type">
                    OUT FRONTS {">"} BUMPER
                </div>
            </div>
            <div className="item__bot">
                <ul className="item__bot-star">
                    <li><AiFillStar /></li>
                    <li><AiFillStar /></li>
                    <li><AiFillStar /></li>
                    <li className="start__disable"><AiFillStar /></li>
                    <li className="start__disable"><AiFillStar /></li>
                </ul>
                <div className="item__bot-info">
                    <p>18 Credit</p>
                    <p>11 downloads</p>
                </div>
            </div>
            <div className="item__credit">
                <div className="item__credit-left">
                    <img src={avt2} alt="" className="item__credit-avt"/>
                    <span>By carve</span>
                </div>
                <div className="item__credit-right">
                    <img src={item2} alt="" />
                    <p>Expert</p>
                </div>
            </div>
          </div>
          <div className="filmlist__item">
            <div className="item__top">
              <span>Upload date : 2021. 11. 29</span>
              <div className="sticker">
                <img src={sticker} alt="" />
              </div>
            </div>
            <div className="item__mid">
              <img src={car} alt="item" className="item__mid-img" />
              <div className="item__mid-title">
                CANADA & USA {">"} 2021 {">"} TOYOTA {">"}
                CAMRY {">"} XLE HYBRID
              </div>
                <div className="item__mid-type">
                    OUT FRONTS {">"} BUMPER
                </div>
            </div>
            <div className="item__bot">
                <ul className="item__bot-star">
                    <li><AiFillStar /></li>
                    <li><AiFillStar /></li>
                    <li><AiFillStar /></li>
                    <li className="start__disable"><AiFillStar /></li>
                    <li className="start__disable"><AiFillStar /></li>
                </ul>
                <div className="item__bot-info">
                    <p>18 Credit</p>
                    <p>11 downloads</p>
                </div>
            </div>
            <div className="item__credit">
                <div className="item__credit-left">
                    <img src={avt3} alt="" className="item__credit-avt"/>
                    <span>By filmking</span>
                </div>
                <div className="item__credit-right">
                    <img src={item3} alt="" />
                    <p>Master</p>
                </div>
            </div>
          </div>
          <div className="filmlist__item">
            <div className="item__top">
              <span>Upload date : 2021. 11. 29</span>
              <div className="sticker">
                <img src={sticker} alt="" />
              </div>
            </div>
            <div className="item__mid">
              <img src={car} alt="item" className="item__mid-img" />
              <div className="item__mid-title">
                CANADA & USA {">"} 2021 {">"} TOYOTA {">"}
                CAMRY {">"} XLE HYBRID
              </div>
                <div className="item__mid-type">
                    OUT FRONTS {">"} BUMPER
                </div>
            </div>
            <div className="item__bot">
                <ul className="item__bot-star">
                    <li><AiFillStar /></li>
                    <li><AiFillStar /></li>
                    <li><AiFillStar /></li>
                    <li><AiFillStar /></li>
                    <li className="start__disable"><AiFillStar /></li>
                </ul>
                <div className="item__bot-info">
                    <p>18 Credit</p>
                    <p>11 downloads</p>
                </div>
            </div>
            <div className="item__credit">
                <div className="item__credit-left">
                    <img src={avt4} alt="" className="item__credit-avt"/>
                    <span>By benzz</span>
                </div>
                <div className="item__credit-right">
                    <img src={item3} alt="" />
                    <p>Advanced</p>
                </div>
            </div>
          </div>
          <div className="filmlist__item">
            <div className="item__top">
              <span>Upload date : 2021. 11. 28</span>
              <div className="sticker">
                <img src={sticker} alt="" />
              </div>
            </div>
            <div className="item__mid">
              <img src={car} alt="item" className="item__mid-img" />
              <div className="item__mid-title">
                CANADA & USA {">"} 2021 {">"} TOYOTA {">"}
                CAMRY {">"} XLE HYBRID
              </div>
                <div className="item__mid-type">
                    OUT FRONTS {">"} BUMPER
                </div>
            </div>
            <div className="item__bot">
                <ul className="item__bot-star">
                    <li><AiFillStar /></li>
                    <li><AiFillStar /></li>
                    <li><AiFillStar /></li>
                    <li><AiFillStar /></li>
                    <li className="start__disable"><AiFillStar /></li>
                </ul>
                <div className="item__bot-info">
                    <p>45 Credit</p>
                    <p>97 downloads</p>
                </div>
            </div>
            <div className="item__credit">
                <div className="item__credit-left">
                    <img src={avt5} alt="" className="item__credit-avt"/>
                    <span>By bmwing</span>
                </div>
                <div className="item__credit-right">
                    <img src={item2} alt="" />
                    <p>Advanced</p>
                </div>
            </div>
          </div>
          <div className="filmlist__item">
            <div className="item__top">
            <img src={bedge} alt="bedge" className="bedge"/>
              <span>Upload date : 2021. 11. 27</span>
              <div className="sticker">
                <img src={sticker} alt="" />
              </div>
            </div>
            <div className="item__mid">
              <img src={car} alt="item" className="item__mid-img" />
              <div className="item__mid-title">
                CANADA & USA {">"} 2021 {">"} TOYOTA {">"}
                CAMRY {">"} XLE HYBRID
              </div>
                <div className="item__mid-type">
                    OUT FRONTS {">"} BUMPER
                </div>
            </div>
            <div className="item__bot">
                <ul className="item__bot-star">
                    <li><AiFillStar /></li>
                    <li><AiFillStar /></li>
                    <li><AiFillStar /></li>
                    <li><AiFillStar /></li>
                    <li className="start__disable"><AiFillStar /></li>
                </ul>
                <div className="item__bot-info">
                    <p>50 Credit</p>
                    <p>211 downloads</p>
                </div>
            </div>
            <div className="item__credit">
                <div className="item__credit-left">
                    <img src={avt6} alt="" className="item__credit-avt"/>
                    <span>By youue</span>
                </div>
                <div className="item__credit-right">
                    <img src={item1} alt="" />
                    <p>Beginner</p>
                </div>
            </div>
          </div>
      </div>
      <div className="load-btn"><Button primary rounded>LOAD MORE</Button></div>
    </div>
  );
}

export default FilmList;
