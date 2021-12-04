import React, { useState } from "react";
import { addToCartIcon } from "../../constants/svg";

const AddToCart = ({ product }) => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((prevState) => prevState + 1);
  };

  const handleDecrement = () => {
    count <= 1 ? setCount(1) : setCount((prevState) => prevState - 1);
  };

  const handleSubmit = () => {
    console.log("SUBMIT: ", product._id, ", amount: ", count);
  };

  return (
    <div className="d-flex justify-content-center">
      <button
        className="table__counter--buttons mx-1"
        onClick={handleDecrement}
      >
        -
      </button>
      <div className="table__counter mx-1">{count}</div>
      <button
        className="table__counter--buttons mx-1"
        onClick={handleIncrement}
      >
        +
      </button>
      <button onClick={handleSubmit} className="table__cart--button mx-2">
        {addToCartIcon}
      </button>
    </div>
  );
};

export default AddToCart;
