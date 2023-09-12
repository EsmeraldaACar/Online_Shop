import '../styles/BannerStyles.css'
import image from '../assets/images/img1.png'  

function Banner() {
  return (
    <div className='banner'>
      <img className='bannerImg' src={image} alt="Descripción de la imagen" />
    </div>
  )
}

export default Banner
