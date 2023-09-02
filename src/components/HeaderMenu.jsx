import { FaShoppingCart } from "react-icons/fa";
import '../styles/GeneralStyles.css'
function HeaderMenu() {
  return (
    <nav>
      <span>
        <p className="primaryText">Arista</p>
      </span>
      <span>
        <FaShoppingCart size={'20'} color="icon"/>
      </span>
    </nav>
  )
}

export default HeaderMenu
