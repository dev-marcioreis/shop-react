import './sliderCard.css'
import data from './data'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SliderCard = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  }

  return (
    <>
      <div className='slider__card'>
        <div className='container'>
          <Slider {...settings}>
          {
            data.map((value, index) => {
              return (
                <div className="card__box" key={index}>
                  <div className="left">
                    <h2>{value.title}</h2>
                    <p>{value.desc}</p>
                  </div>
                  <div className="right">
                    <img src={value.image} alt="" />
                  </div>
                </div>
              )
            })
          }
              </Slider>
        </div>
      </div>
    </>
  )
}

export default SliderCard