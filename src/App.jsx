
import { useState } from "react";
import './App.css'
import './styles/GeneralStyles.css'
import HeaderMenu from './components/HeaderMenu';
import Banner from './components/Banner';
import ProductCard from './components/ProductCard';
import PRODUCTS from './constants/products';

function App() {
  const [shoppingCart, setShoppingCart] = useState([])

  const addItemShoppingCart = (item) => {
    const items = [...shoppingCart];
    items.push(item);
    setShoppingCart(items);
  }


  return (
    <>
      <HeaderMenu shoppingCart={shoppingCart}/>
      <Banner/>
      <div className='container productsContainer'>
        { PRODUCTS.map((product, index) => (
          <ProductCard product={product} key={index} onClick={addItemShoppingCart}/>
        ))}
      </div>
    </>
  )
}

export default App
