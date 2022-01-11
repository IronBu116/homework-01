import React from "react";
import PropTypes from "prop-types";
import Table from "../common/table/table";
import { Link } from "react-router-dom";
import AddToCart from "./addToCart";
import { renderPrice } from "../../utils/renderPrice";
import Brand from "./brand";
import Category from "./category";

const ProductTable = ({ data, onSort, selectedSort }) => {
  const columns = {
    name: {
      path: "name",
      name: "Название",
      component: (product) => (
        <Link className="table__links" to={`/products/${product._id}`}>
          {product.name}
        </Link>
      ),
    },
    brand: {
      path: "brand",
      name: "Бренд",
      component: (product) => <Brand id={product.brand} />,
    },
    category: {
      path: "category",
      name: "Категория",
      component: (product) => <Category id={product.category} />,
    },
    amount: {
      path: "amount",
      name: "Доступно, шт.",
    },
    sex: { path: "sex", name: "Пол" },
    price: {
      path: "price",
      name: "Цена, руб.",
      component: (product) => renderPrice(product.price),
    },
    addToCart: {
      name: "В корзину",
      component: (product) => <AddToCart product={product} />,
    },
  };
  return (
    <Table
      columns={columns}
      data={data}
      onSort={onSort}
      selectedSort={selectedSort}
    />
  );
};

ProductTable.propTypes = {
  data: PropTypes.array.isRequired,
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired,
};

export default ProductTable;
