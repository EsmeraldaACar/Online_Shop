import PropTypes from 'prop-types';
import '../styles/GeneralStyles.css'

function ProductCard(props) {
  const { product, onClick } = props

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={product.image} alt="Placeholder image"/>
        </figure>
      </div>
      <div className="card-content">
        <p className="secondaryText is-4">{product.nombre}</p>
        <div className="content terciaryText">
          {product.descripcion}
          <br />
        </div>
      </div>
      <footer className="card-footer">
        <button className="card-footer-item" onClick={() => onClick(product)}>Comprar</button>
      </footer>
    </div>
  )
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  // ...
};

export default ProductCard
