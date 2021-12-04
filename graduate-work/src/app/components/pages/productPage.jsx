import React, { useEffect, useState } from "react";
import api from "../../api";
import somecross from "../../images/products/somecross.jpg";
import { renderPrice } from "../../utils/renderPrice";

const ProductPage = ({ productId }) => {
  const [product, setProduct] = useState();
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    if (count < product.amount) {
      setCount((prevState) => prevState + 1);
    }
  };

  const handleDecrement = () => {
    count <= 1 ? setCount(1) : setCount((prevState) => prevState - 1);
  };

  useEffect(() => {
    api.products.getById(productId).then((data) => setProduct(data));
  }, []);

  if (product) {
    return (
      <>
        <section className="product__nav container-xl d-flex justify-content-center align-items-around">
          <div className="product__nav-item">Карточка товара</div>
        </section>
        <section className="content__section container-xl d-flex align-items-center">
          <div className="row">
            <div className="col-8">
              <div className="row justify-content-center">
                <div className="row justify-content-center p-0">
                  <h3 className="m-2">{product.name}</h3>
                  <h5>{product.brand}</h5>
                </div>
                <div className="m-2">
                  <strong>Категория: </strong>
                  {product.type}
                </div>
                <div className="m-2">
                  <strong>Доступное количество: </strong>
                  {product.amount} шт.
                </div>
                <div className="m-2">
                  <strong>Стоимость: </strong>
                  {renderPrice(product.price)} руб.
                </div>
                <div className="m-2">
                  <strong>Описание: </strong> {product.desription}
                </div>
                {product.amount === 0 ? (
                  <h3>Товара нет в наличии</h3>
                ) : (
                  <>
                    <strong>Выберите количество: </strong>
                    <div className="d-flex align-items-center m-2">
                      <button
                        className="table__counter--buttons mx-1"
                        onClick={handleDecrement}
                      >
                        -
                      </button>
                      <div className="table__counter mx-1 p-1">{count}</div>
                      <button
                        className="table__counter--buttons mx-1"
                        onClick={handleIncrement}
                      >
                        +
                      </button>
                    </div>
                    <div className="m-2">
                      <button className="header__usernav--link">
                        В корзину
                      </button>
                      {/* <button className="header__usernav--link">Изменить?</button> */}
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="col-4 d-flex justify-content-center">
              <img
                src={somecross}
                alt="product picture"
                className="product__card-img"
              ></img>
            </div>
          </div>
        </section>
      </>
    );
  } else {
    return (
      <>
        <section className="product__nav container-xl d-flex justify-content-center align-items-around">
          <div className="product__nav-item">Loading...</div>
        </section>
        <section className="content__section container-xl p-0"></section>;
      </>
    );
  }
};

export default ProductPage;
