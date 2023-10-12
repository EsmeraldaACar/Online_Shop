import { useState } from "react";
import { PropTypes } from "prop-types";
import { FaShoppingCart } from "react-icons/fa";
import '../styles/GeneralStyles.css'
function HeaderMenu(props) {
  const { shoppingCart } = props
  const [dropDown, setDropDown] = useState('')
  const [costShoppingCart, setCostShoppingCart] = useState(0)
  const activeDropDown = () => {
    dropDown === '' ? setDropDown('is-active') : setDropDown('')
  }

  return (
    <nav>
      <span>
        <p className="primaryText">Arista</p>
      </span>
      <div className={`dropdown ${dropDown} pr-5 is-right`}>
        <div className="dropdown-trigger">
          <button className="button" aria-haspopup="true" aria-controls="dropdown-menu" onClick={activeDropDown}>
            <FaShoppingCart size={'20'} color="icon" />
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu" style={{ width: '300px', height: '500px', overflowY: 'auto' }}>
          <div className="dropdown-content">
            {shoppingCart.map((item, index) => (
              <>
                <div className="is-flex" key={index}>
                  <img src={item.image} alt="Placeholder image" width={120} />
                  <div>
                    <p className="dropdown-item">{item.nombre}</p>
                    <p className="dropdown-item">{item.descripcion}</p>
                    <p className="dropdown-item">${item.precio} MXN</p>
                  </div>
                </div>
                <hr className="dropdown-divider" />
              </>
            ))}
            <div className="is-flex is-justify-content-space-around ropdown-item">
              <b>Total:</b>
              <p>$9000 MXN</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

HeaderMenu.propTypes = {
  shoppingCart: PropTypes.object.isRequired,
};

export default HeaderMenu
