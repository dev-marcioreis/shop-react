import Banner from '../banner/Banner'
import NewsLetter from '../newsLetter/NewsLetter'
import './home.css'

const Home = () => {
  return (
    <>
        <section className='home'>
          <div className="section">
            <div className="container">
              <Banner />
            </div>
          </div>
          <NewsLetter />
        </section>
    </>
  )
}

export default Home