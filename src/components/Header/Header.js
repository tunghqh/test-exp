import React from "react";

import Button from "../Button";

import "./Header.scss";
import Logo from "../../assets/imgs/logo.svg";
import User from "../../assets/imgs/user.svg";

function Header() {
  return (
    <div className="header">
      <img src={Logo} alt="logo" className="header__logo" />
      <ul className="header__menu">
        <li className="menu__item">Patenrn</li>
        <li className="menu__item">Pricing</li>
        <li className="menu__item">Support</li>
        <li className="menu__item">Ultrafit shop</li>
      </ul>
      <div className="header__right">
        <Button primary>EDIT & PIOT</Button>
        <Button outline>SELL PATTERN</Button>
        <div className="header__right-user">
          <img src={User} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default Header;
