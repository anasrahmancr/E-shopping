import React, { useEffect, useState } from "react";
import Product from "../product/Product";
import customAxios from "../../services/axiosCall";

const Content = ({ searchProducts }) => {
  const [recommendedProducts, setRecommendedProducts] = useState([]);

  useEffect(() => {
    const cookies = document.cookie.split("; ");
    const username_cookie = cookies.find((cookie) =>
      cookie.startsWith("username=")
    );
    const userName = username_cookie ? username_cookie.split("=")[1].replace('%40', '@') : null;
    const api = customAxios();
    api.get(`/user/home/${userName}`,{withCredentials: true}).then(response=>{
      if(response.data.success){
        setRecommendedProducts(response.data.recommendations);
      }
    })
  },[]);

  const searchData = {
    heading: 'Searched Products',
    data: searchProducts,
  };

  const recommendedData = {
    heading: 'Recommended Products',
    data: recommendedProducts,
  };

  return (
    <div>

      <Product products={searchData} />
      <Product products={recommendedData} />
    </div>
  );
};

export default Content;
