import React from "react";

const MainContainer = ({ children, style }) => {
  return (
    <section className={`content__section container-xl ${style}`}>
      {children}
    </section>
  );
};

export default MainContainer;
