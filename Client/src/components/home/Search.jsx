import React, { useState, useEffect } from "react";
import customAxios from "../../services/axiosCall";

const Search = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [price_min, setPrice_min] = useState(0);
  const [price_max, setPrice_max] = useState(0);

  const handleSearch = (e) => {
    try {
      e.preventDefault();
      console.log(keyword, price_max, price_min);
      const api = customAxios();
      api
        .get(
            `/products/search?keyword=${keyword}&price_min=${price_min}&price_max=${price_max}`,
         { withCredentials: true }
        )
        .then((response) => {
          if (response.data.success) {
            setFilteredProducts(response.data.searchResults);
            console.log(response.data.searchResults);
          }
        });
    } catch (error) {
      console.error(error.message);
    }
  };

  //   const resetFilters = () => {
  //     setFilteredProducts(products);
  //     setSearchKeyword('');
  //     setPriceRange({ min: '', max: '' });
  //   };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search by product name or brand"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>

      <div>
        <label>Price Range:</label>
        <input
          type="number"
          placeholder="Min"
          value={price_min}
          onChange={(e) => setPrice_min(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max"
          value={price_max}
          onChange={(e) => setPrice_max(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {/* <button onClick={resetFilters}>Reset Filters</button> */}
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.product_id}>
            {product.product_description} -- {product.brand_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
