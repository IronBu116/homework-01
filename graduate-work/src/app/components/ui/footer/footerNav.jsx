import React from "react";
import { Link } from "react-router-dom";

const FooterNav = () => {
  return (
    <div className="footer__nav d-flex justify-content-center mt-2">
      <Link className="footer__nav-item--link mx-3" aria-current="page" to="/">
        Вакансии
      </Link>
      <Link className="footer__nav-item--link mx-3" aria-current="page" to="/">
        Реклама
      </Link>
      <Link className="footer__nav-item--link mx-3" aria-current="page" to="/">
        Соглашение
      </Link>
      <Link className="footer__nav-item--link mx-3" aria-current="page" to="/">
        Служба поддержки
      </Link>
    </div>
  );
};

export default FooterNav;
