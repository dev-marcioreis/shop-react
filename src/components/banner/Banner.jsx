import './banner.css'
import BannerImg from './img/banner.png'

const Banner = () => {
  return (
    <>
        <section className="banner">
          <div className="banner__content container">
            <div className="banner__text">
              <h1>beats stúdio</h1>
              <p>Autênticos fones de ouvido circum-auriculares sem fio com cancelamento de ruído</p>
              <div className="cta">
                <button className='banner__cta btn'>saiba mais</button>
                <button className='banner__cta-1 btn'>compre agora</button>
              </div>
            </div>
            <img className='banner__image' src={BannerImg} alt="Banner" />
          </div>
        </section>
    </>
  )
}

export default Banner