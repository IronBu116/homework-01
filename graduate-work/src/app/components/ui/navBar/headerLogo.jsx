import React from "react";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";

const HeaderLogo = () => {
  return (
    <div className="header__logo col-3 d-flex justify-content-end">
      <Link aria-current="page" to="/">
        <img src={logo} alt="текст" className="header__logo-size" />
      </Link>
    </div>
  );
};

export default HeaderLogo;
