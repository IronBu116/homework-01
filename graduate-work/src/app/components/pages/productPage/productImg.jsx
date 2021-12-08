import React from "react";
import somecross from "../../../images/products/somecross.jpg";

const ProductImg = () => {
  return (
    <div className="col-4 d-flex justify-content-center">
      <img
        src={somecross}
        alt="product_picture"
        className="product__card-img"
      ></img>
    </div>
  );
};

export default ProductImg;
