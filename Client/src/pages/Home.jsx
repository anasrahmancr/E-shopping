import React,{useState} from 'react'
import Header from '../components/home/Header';
import Content from '../components/home/Content';
import Search from '../components/home/Search';
import Product from '../components/product/Product';

const Home = () => {

  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = (filteredProducts)=>{
    setFilteredProducts(filteredProducts);
  }
  return (
    <div className='p-5'>
      <Header/>
      <Search onSearch={handleSearch}/>
      <Content searchProducts={filteredProducts}/>
    </div>
  )
}

export default Home
