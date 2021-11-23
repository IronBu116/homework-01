import React from "react";
import { Link } from "react-router-dom";

const HeaderUserNav = () => {
  return (
    <div className="header__usernav col-4 d-flex justify-content-end">
      <Link className="header__usernav--link" aria-current="page" to="/login">
        Вход
      </Link>
      <Link className="header__usernav--link" aria-current="page" to="/login">
        Регистрация
      </Link>
    </div>
  );
};

export default HeaderUserNav;
