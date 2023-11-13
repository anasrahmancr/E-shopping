import React from 'react';
<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
</style>

const Product = ({ products }) => {
  return (
  <div className='mb-10'>
  {products.data.length>0 && (
    <div>
    <div className="line"></div>
    <span className='text-2xl font-bold text-center mb-10 text'>{products.heading}</span>
    <div className="line"></div>
    </div>
  )}
    <div className="flex flex-wrap -mx-4">
      {products.data.map((product, index) => (
     
    <div className="max-w-sm w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-7">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          className="w-full h-48 object-cover object-center"
          src={product.image_link}  // Replace with the actual image URL
          alt={product.product_description}
        />
        <div className="p-4">
          <h2 className="text-gray-800 text-base font-semibold product-description">{product.product_description}</h2>
          <div>
          <p className="text-gray-600">{product.Product_category}</p>
          <p className="text-gray-600 font-medium">{product.brand_name}</p>
          </div>
          <p className="mt-2 text-green-700 font-semibold">${product.price}</p>
          <div className='text-center'>
          <button className="mt-4 add-to-cart text-white px-4 py-2 rounded-full mx-auto">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
     ))}
     </div>
     </div>
  );
};

export default Product;
