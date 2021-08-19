import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const tags = [];

  const formCount = () => {
    return count === 0 ? "Ноль" : count;
  };

  const getBageclasses = () => {
    let classes = "badge m-2 bg-";
    classes += count === 0 ? "danger" : "primary";
    return classes;
  };

  const handleIncrement = (productId) => {
    console.log(productId);
    setCount(count + 1);
  };

  const handleDecrement = () => {
    return count === 0 ? count : setCount(count - 1);
  };

  return (
    <>
      <span className={getBageclasses()}>{formCount()}</span>
      <button
        onClick={() => handleIncrement({ id: 1 })}
        className="btn btn-secondary btn-sm"
      >
        Increment
      </button>
      <button onClick={handleDecrement} className="btn btn-secondary btn-sm">
        Decriment
      </button>
    </>
  );
};

export default Counter;
