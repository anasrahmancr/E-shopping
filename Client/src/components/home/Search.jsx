import React, { useState, useEffect } from "react";
import customAxios from "../../services/axiosCall";

const Search = ({onSearch}) => {
  const [keyword, setKeyword] = useState("");
  const [price_min, setPrice_min] = useState('');
  const [price_max, setPrice_max] = useState('');

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
            onSearch(response.data.searchResults);
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
    <div className="flex mb-8 bg-gray-200 p-5">
      <div>
        <label className="ml-5 mr-3">Search a product: </label>
        <input
          type="text"
          placeholder="Search by name or brand"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="p-2 rounded-md"
        />
      </div>

      <div>
        <label className="mr-3 ml-3">Minimum Price:</label>
        <input
          type="number"
          placeholder="Min"
          value={price_min}
          onChange={(e) => setPrice_min(e.target.value)}
          className="p-2 rounded-md"
        />
        <label className="ml-6 mr-3">Maximum Price:</label>
        <input
          type="number"
          placeholder="Max"
          value={price_max}
          onChange={(e) => setPrice_max(e.target.value)}
          className="p-2 rounded-md"
        />
        <button className="bg-green-800 text-white mx-7 px-4 py-2 rounded-lg font-medium " onClick={handleSearch}>Search</button>
      </div>
      {/* <button onClick={resetFilters}>Reset Filters</button> */}
    </div>
  );
};

export default Search;
