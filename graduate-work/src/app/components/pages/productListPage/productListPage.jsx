import React, { useState, useEffect } from "react";
import SearchBar from "../../ui/searchBar";
import { paginate } from "../../../utils/paginate";
import { viewIconTable } from "../../../constants/svg";
import Pagination from "../../common/pagination";
import _ from "lodash";
import ProductTable from "../../ui/productTable";
import GroupList from "../../common/groupList";
import useMockData from "../../../utils/mockData";
import { useProduct } from "../../hook/useProducts";
import ProductNav from "../../ui/productNav";
import MainContainer from "../../ui/mainContainer";
import { useCategories } from "../../hook/useCategories";

const ProductsListPage = () => {
  const { products } = useProduct();
  const { categories } = useCategories();
  const { initialize } = useMockData();
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState({ path: "name", order: "asc" });
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState();

  useEffect(() => {
    setCurrentPage(1);
  }, [products, searchQuery, selectedCategory]);

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

  const initializeData = () => {
    initialize();
  };

  const filteredProducts = searchQuery
    ? products.filter(
        (product) =>
          product.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
      )
    : selectedCategory
    ? products.filter((product) => {
        return (
          JSON.stringify(product.category) === JSON.stringify(selectedCategory)
        );
      })
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
        <ProductNav>
          <GroupList
            selectedItem={selectedCategory}
            onItemSelect={handleProductSelect}
            items={categories}
            onClear={clearFilter}
          />
        </ProductNav>
      ) : (
        <ProductNav>
          <div className="product__nav-item">Loading...</div>
        </ProductNav>
      )}
      <MainContainer>
        <div className="content__section-nav d-flex justify-content-end m-3">
          <SearchBar
            type="text"
            name="searchQuery"
            placeholder="Поиск"
            onChange={handleSearchQuery}
            value={searchQuery}
          />
          <button className="mockdata_button ms-3" onClick={initializeData}>
            Получить данные
          </button>
          <button className="content__section-view ms-3">
            {viewIconTable}
          </button>
        </div>
        {count > 0 && (
          <>
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
          </>
        )}
      </MainContainer>
    </>
  );
};

export default ProductsListPage;
