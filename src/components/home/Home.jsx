import Banner from '../banner/Banner'
import SliderCard from '../slider/SliderCard'
import Category from '../category/Category'
import Products from '../products/Products'

import './home.css'
import { useGetAllProductsQuery } from '../../features/productsApi'

const Home = () => {
  const { data, error, isLoading } = useGetAllProductsQuery()

  return (
    <>
        <section className='home'>
          <div className="section">
            <div className="container">
              <Banner />
              <SliderCard />
              <Category />
              <Products />
            </div>
          </div>
        </section>
    </>
  )
}

export default Home