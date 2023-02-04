import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './cart.css'
import { FcHome as Home } from 'react-icons/fc'
import { MdOutlineRemoveShoppingCart as Empty } from 'react-icons/md'
import { RiDeleteBin6Line as Delete } from 'react-icons/ri'
import { TbReportMoney as Money } from 'react-icons/tb'
import { AiOutlineArrowLeft as Arrow } from 'react-icons/ai'

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
              ) : (<>
                <div className="cart__titles">
                  <h3>item</h3>
                  <h3>valor</h3>
                  <h3>quantidade</h3>
                  <h3>total</h3>
                </div>
                <div className="cart__items">
                  {
                    cart.cartItems?.map(cartItem => (
                      <div className="cart__item" key={cartItem.id}>
                        <div className="cart__product">
                          <div className='cart__product-image'>
                            <img src={cartItem.image} alt={cartItem.name} />
                          </div>
                          <div className='cart__info'>
                            <h3>{cartItem.name}</h3>
                            <button>
                              <i><Delete /></i>
                              <span>remover</span>
                            </button>
                          </div>
                        </div>
                        <div className="cart__product-price">{cartItem.price}</div>
                        <div className="cart__product-quantity">
                          <button>-</button>
                          <div className="cart__count">{cartItem.cartQuantity}</div>
                          <button>+</button>
                        </div>
                        <div className="cart__product-total-price">
                          {cartItem.price * cartItem.cartQuantity}
                        </div>
                      </div>
                    ))
                  }
                </div>
                <div>
                </div>
                <div className="cart__summary">
                  <button className='clear-cart'>limpara carrinho</button>
                  <div className="cart__checkout">
                    <div className="cart__subtotoal">
                      <span>subtotal</span>
                      <span className='cart__amount'>R$ {cart.cartTotalAmount}</span>
                    </div>
                    <button className="cart__pay btn">
                      <i><Money /></i>
                      <span>pagar</span>
                    </button>
                  </div>
                  <Link to='/shop-react' className="home__shop-back">
                    <i><Arrow /></i>
                    <span>voltar para comprar</span>
                  </Link>
                </div>
              </>)
            }
          </div>
        </section>
    </>
  )
}

export default Cart
