import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addToCart } from '../../features/cartSlice'

import './products.css'
import ProductsItems from './ProductsItems'
import { BsFillBagFill as Bag } from 'react-icons/bs'


const Products = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleAddToCart = product => {
        dispatch(addToCart(product));
        navigate('/cart')
    }

  return (
    <>
        <section className="section">
            <div className="products__section">
                <div className="products__home">
                    <h3 className='products__title'>nossos produtos</h3>
                    <div className="products__content">
                        {
                            ProductsItems.map((product) => {
                                return (
                                    <div className="product__box" key={product.id}>
                                        <div className="product__image">
                                            <img src={product.image} alt={product.name} />
                                        </div>
                                        <div className="product__content">
                                            <h2>{product.brand}</h2>
                                            <h3>{product.name}</h3>
                                            <p>{product.description}</p>
                                            <span className='product__price'>{product.price}</span>
                                        </div>
                                        <button className="product__btn" onClick={() => handleAddToCart(product)}><i><Bag /></i>comprar</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Products