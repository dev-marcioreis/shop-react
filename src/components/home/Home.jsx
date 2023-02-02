import './home.css'
import Banner from '../banner/Banner'
import SliderCard from '../slider/SliderCard'
import Category from '../category/Category'
import { useGetAllProductsQuery } from '../../features/productsApi'

const Home = () => {

  const { data, error, isLoading } = useGetAllProductsQuery()

  return (
      <section className='home'>
        { isLoading ? (
          <p>Carregando página...</p>
        ) : error ? (
          <p>Ocorreu um erro...</p>
        ) : (
           <div className="section">
            <div className="container">
              <Banner />
              <SliderCard />
              <Category />
              <div className='products__content'>
                {
                  data?.map( product =>
                  <div className='product__box' key={product.id}>
                    <div className="product__image">
                      <img src={product.image} alt={product.name} />
                    </div>
                    <div className='product__content'>
                      <h2>{product.brand}</h2>
                      <h3>{product.name}</h3>
                      <p>{product.description}</p>
                      <span className='product__price'>{product.price}</span>
                    </div>
                    <button className="product__btn">Comprar</button>
                  </div>)
                }
              </div>
            </div>
          </div>
        )}
      </section>
  )
}

export default Home