import React from 'react';

const Product = ({ products }) => {
  return (
  <div className='mb-10'>
  {products.data.length>0 && (
    <div className='text-2xl font-bold text-center mb-10'>{products.heading}</div>
  )}
    <div className="flex flex-wrap -mx-4">
      {products.data.map((product, index) => (
     
    <div className="max-w-sm w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          className="w-full h-48 object-cover object-center"
          src={product.image_link}  // Replace with the actual image URL
          alt={product.product_description}
        />
        <div className="p-4">
          <h2 className="text-gray-800 text-lg font-semibold">{product.product_description}</h2>
          <p className="text-gray-600">{product.Product_category}</p>
          <p className="mt-2 text-gray-900">${product.price}</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full">Add to Cart</button>
        </div>
      </div>
    </div>
     ))}
     </div>
     </div>
  );
};

export default Product;
