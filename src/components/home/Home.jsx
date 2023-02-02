import Banner from '../banner/Banner'
import SliderCard from '../slider/SliderCard'
import './home.css'

const Home = () => {
  return (
    <>
        <section className='home'>
          <div className="section">
            <div className="container">
              <Banner />
              <SliderCard />
            </div>
          </div>
        </section>
    </>
  )
}

export default Home