import React from "react";

const ProductNav = ({ children }) => {
  return (
    <section className="product__nav container-xl d-flex justify-content-around align-items-around">
      {children}
    </section>
  );
};

export default ProductNav;
