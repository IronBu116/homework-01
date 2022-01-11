import React from "react";
import PropTypes from "prop-types";
import { useBrands } from "../hook/useBrands";

const Brand = ({ id }) => {
  const { isLoading, getBrand } = useBrands();
  const brand = getBrand(id);
  if (!isLoading) {
    return <>{brand.name}</>;
  } else return <>Loading ...</>;
};

Brand.propTypes = {
  id: PropTypes.string,
};
export default Brand;
