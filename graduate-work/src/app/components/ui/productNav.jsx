import React from "react";

const ProductNav = () => {
  return (
    <section className="product__nav container-xl d-flex justify-content-around">
      <button className="product__nav-item--button-active">Все</button>
      <button className="product__nav-item--button">Одежда</button>
      <button className="product__nav-item--button">Обувь</button>
      <button className="product__nav-item--button">Снаряжение</button>
    </section>
  );
};

export default ProductNav;
