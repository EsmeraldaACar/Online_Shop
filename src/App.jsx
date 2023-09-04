
import './App.css'
import './styles/GeneralStyles.css'
import HeaderMenu from './components/HeaderMenu';
import Banner from './components/Banner';
import ProductCard from './components/ProductCard';
function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
      <HeaderMenu />
      <Banner />
      <div className='container productsContainer'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </>
  )
}

export default App
