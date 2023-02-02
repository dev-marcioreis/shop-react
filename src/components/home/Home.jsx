import Banner from '../banner/Banner'
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
        </section>
    </>
  )
}

export default Home