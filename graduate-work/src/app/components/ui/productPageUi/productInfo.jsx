import React from "react";
import ProductButtons from "./productButtons";
import ProductDecription from "./productDescription";

const ProductInfo = ({ product }) => {
  return (
    <div className="col-8">
      <div className="row justify-content-center">
        <ProductDecription product={product} />
        <ProductButtons product={product} />
      </div>
    </div>
  );
};

export default ProductInfo;
