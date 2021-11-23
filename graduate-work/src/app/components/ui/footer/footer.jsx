import React from "react";
import FooterNav from "./footerNav";
import FooterSocials from "./footerSocials";

const Footer = () => {
  return (
    <footer className="footer container-xl mt-2">
      <FooterSocials />
      <FooterNav />
      <div className="d-flex d-flex justify-content-center mt-2">
        <p className="footer__info">
          IronBull Inc. 2020-2021. &copy;Developed by bro_daa.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
