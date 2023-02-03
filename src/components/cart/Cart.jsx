import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './cart.css'
import { FcHome as Home } from 'react-icons/fc'
import { MdOutlineRemoveShoppingCart as Empty } from 'react-icons/md'

const Cart = () => {

  const cart = useSelector(state => state.cart)

  return (
    <>
        <section className="section cart">
          <div className="container">
            <h2>carrinho</h2>
            {
              cart.cartItems.length === 0 ? (
                <div className="cart__empty">
                  <p>Seu carrinho está vazio.</p>
                  <i className='empty__logo'><Empty /></i>
                    <Link to='/shop-react' className="home__shop">
                      <i><Home /></i>
                      <span>voltar para comprar</span>
                    </Link>
                </div>
              ) : (
              <>
                <div className="cart__titles flex2">
                  <h3>item</h3>
                  <h3>valor</h3>
                  <h3>quantidade</h3>
                  <h3>total</h3>
                </div>
              </>)
            }
          </div>
        </section>
    </>
  )
}

export default Cart