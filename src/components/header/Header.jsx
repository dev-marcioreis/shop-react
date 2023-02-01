import './header.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FcHome as Home, FcDecision as About, FcMultipleSmartphones as Categ, FcOnlineSupport as Contac, FcInTransit as Cart } from 'react-icons/fc'
import { FiMenu as Open } from 'react-icons/fi'
import { AiOutlineClose as Close } from 'react-icons/ai'

const Header = () => {

  const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <>
        <header className="header">
          <div className="container flex2">
          <div className="header__logo">
              <Link to='/'><h2 className='logo'>shop</h2></Link>
            </div>
            <ul className={mobileMenu ?  'header__list flex1' : 'link flex2'} onClick={() => setMobileMenu(false)}>
              <li className='header__link'>
                <Link to='/'><i><Home /></i>home</Link>
              </li>
              <li className='header__link'>
                <Link to='/'><i><About /></i>sobre nós</Link>
              </li>
              <li className='header__link'>
                <Link to='/'><i><Categ /></i>categorias</Link>
              </li>
              <li className='header__link'>
                <Link to='/'><i><Contac /></i>fale conosco</Link>
              </li>
            </ul>
              <div className="header__cart">
                <Link to='/cart'>
                  <i><Cart /></i>
                  <span className='header__count'>0</span>
                </Link>
              </div>
              <button className='header__btn ' onClick={() => setMobileMenu(!mobileMenu)}>
                {
                  mobileMenu ? <span className="close__btn"><Close /></span> :  <span className="open__btn"><Open /></span>
                }
              </button>
          </div>
        </header>
    </>
  )
}

export default Header