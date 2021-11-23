import React from "react";

import HeaderLogo from "./headerLogo";
import HeaderNavList from "./headerNavList";
import HeaderUserNav from "./headerUserNav";

const Header = () => {
  return (
    <header className="header container-xl">
      <div className="header__navbar row align-items-center h-100">
        <HeaderNavList />
        <HeaderLogo />
        <HeaderUserNav />
      </div>
    </header>
  );
};

export default Header;
