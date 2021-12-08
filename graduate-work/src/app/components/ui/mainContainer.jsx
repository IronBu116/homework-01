import React from "react";

const MainContainer = ({ children }) => {
  return (
    <section className="content__section container-xl">{children}</section>
  );
};

export default MainContainer;
