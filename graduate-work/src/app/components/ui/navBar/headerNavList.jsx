import React from "react";
import { Link } from "react-router-dom";

const HeaderNavList = () => {
  return (
    <div className="header__nav-list col-5">
      <ul className="header__nav-list nav d-flex justify-content-around">
        <li className="nav-item">
          <Link className="nav-item--link" aria-current="page" to="/products">
            Главная
          </Link>
        </li>
        <li>
          <Link className="nav-item--link" aria-current="page" to="/sale">
            Распродажа
          </Link>
        </li>
        <li>
          <Link className="nav-item--link" aria-current="page" to="/about">
            О нас
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HeaderNavList;
