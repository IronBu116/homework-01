import React from "react";
import PropTypes from "prop-types";
import { useCategories } from "../hook/useCategories";

const Category = ({ id }) => {
  const { isLoading, getCategory } = useCategories();
  const category = getCategory(id);

  if (!isLoading) {
    return <>{category.name}</>;
  } else return <>Loading ...</>;
};

Category.propTypes = {
  id: PropTypes.string,
};

export default Category;
