import PropTypes from 'prop-types';
import '../styles/GeneralStyles.css'

function ProductCard(props) {
  const { product } = props
  console.log('product', product)
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
        </figure>
      </div>
      <div className="card-content">
        <p className="secondaryText is-4">{product.nombre}</p>
        <div className="content terciaryText">
          {product.descripcion}
          <br />
        </div>
      </div>
    </div>
  )
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  // ...
};

export default ProductCard
