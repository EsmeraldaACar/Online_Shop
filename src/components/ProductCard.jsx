import '../styles/GeneralStyles.css'

function ProductCard() {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
        </figure>
      </div>
      <div className="card-content">
      <p className="secondaryText is-4">John Smith</p>
        <div className="content terciaryText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris.
          <br />
        </div>
      </div>
    </div>
  )
}

export default ProductCard
