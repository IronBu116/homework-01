import React from "react";
import socials from "../../../constants/socials";

const FooterSocials = () => {
  return (
    <div className="footer__socials d-flex justify-content-center">
      {Object.keys(socials).map((key) => {
        return (
          <div
            key={key}
            className="footer__socials-item d-flex justify-content-center align-items-center"
          >
            <a href={socials[key].link} className="footer__socials-item--link">
              <img
                src={socials[key].img}
                alt={socials[key]}
                className="footer__socials-item--link"
              />
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default FooterSocials;
