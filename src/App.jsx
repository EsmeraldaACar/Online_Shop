
import './App.css'
import './styles/GeneralStyles.css'
import HeaderMenu from './components/HeaderMenu';
import Banner from './components/Banner';
import ProductCard from './components/ProductCard';
import PRODUCTS from './constants/products'

function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
      <HeaderMenu />
      <Banner />
      <div className='container productsContainer'>
        { PRODUCTS.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
    </>
  )
}

export default App
