import React, { useState, useEffect } from "react";
import SearchBar from "../ui/searchBar";
import { paginate } from "../../utils/paginate";
import { viewIconTable } from "../../constants/svg";
import Pagination from "../common/pagination";
import _ from "lodash";
import ProductTable from "../ui/productTable";
import GroupList from "../common/groupList";
import api from "../../api";

const ProductsListPage = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState({ path: "name", order: "asc" });
  const [categories, setCategories] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState();

  useEffect(() => {
    api.categories.fetchAll().then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [products, searchQuery]);

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const handleProductSelect = (item) => {
    if (searchQuery !== "") setSearchQuery("");
    setSelectedCategory(item);
  };

  const handleSearchQuery = ({ target }) => {
    setSelectedCategory(undefined);
    setSearchQuery(target.value);
  };

  const handleSort = (item) => {
    setSortBy(item);
  };

  const clearFilter = () => {
    setSelectedCategory();
  };

  const filteredProducts = searchQuery
    ? products.filter(
        (product) =>
          product.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
      )
    : selectedCategory
    ? products.filter(
        (product) =>
          JSON.stringify(product.type) === JSON.stringify(selectedCategory)
      )
    : products;

  const pageSize = 6;
  const count = filteredProducts.length;
  const sortedProducts = _.orderBy(
    filteredProducts,
    [sortBy.path],
    [sortBy.order]
  );
  const productsCrop = paginate(sortedProducts, currentPage, pageSize);

  return (
    <>
      {categories ? (
        <GroupList
          selectedItem={selectedCategory}
          onItemSelect={handleProductSelect}
          items={categories}
          onClear={clearFilter}
        />
      ) : (
        <h3 className="product__nav-item container-xl d-flex justify-content-center align-items-center">
          Loading...
        </h3>
      )}
      <section className="content__section container-xl p-0">
        <div className="content__section-nav d-flex justify-content-end m-3">
          <SearchBar
            type="text"
            name="searchQuery"
            placeholder="Поиск"
            onChange={handleSearchQuery}
            value={searchQuery}
          />
          <button className="content__section-view ms-3">
            {viewIconTable}
          </button>
        </div>
        <ProductTable
          data={productsCrop}
          onSort={handleSort}
          selectedSort={sortBy}
        />
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </section>
    </>
  );
};

export default ProductsListPage;
