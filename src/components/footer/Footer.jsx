import { Link } from 'react-router-dom'
import { AiFillFacebook, AiOutlineTwitter, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import './footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="container footer__container">
            <article>
                <div className="footer__logo">
                  <Link to='/shop-react'><h2 className='logo'>shop</h2></Link>
                </div>
                <p>As melhores marcas e os melhores produtos.</p>
                <div className="footer__social">
                    <Link to="https://www.facebook.com/" target="_blank" rel='noreferrer noopener'><AiFillFacebook /></Link>
                    <Link to="https://twitter.com/" target="_blank" rel='noreferrer noopener'><AiOutlineTwitter /></Link>
                    <Link to="https://www.instagram.com/" target="_blank" rel='noreferrer noopener'><AiFillInstagram /></Link>
                    <Link to="https://www.linkedin.com/" target="_blank" rel='noreferrer noopener'><AiFillLinkedin /></Link>
                </div>
            </article>
            <article>
                <h4>Institucional</h4>
                <Link to='/shop-react' className='footer__link'>Home</Link>
                <Link to='/shop-react' className='footer__link'>Sobre Nós</Link>
                <Link to='/shop-react' className='footer__link'>Categorias</Link>
                <Link to='/shop-react' className='footer__link'>Fale Conosco</Link>
            </article>
            <article>
                <h4>Suporte</h4>
                <Link to='/shop-react' className='footer__link'>Pedidos</Link>
                <Link to='/shop-react' className='footer__link'>Entrega</Link>
                <Link to='/shop-react' className='footer__link'>Devolução</Link>
                <Link to='/shop-react' className='footer__link'>Cancelamento</Link>
            </article>
            <article>
                <h4>Corporativo</h4>
                <Link to='/shop-react' className='footer__link'>FAQ</Link>
                <Link to='/shop-react' className='footer__link'>Imprensa</Link>
                <Link to='/shop-react' className='footer__link'>Mpa do site</Link>
                <Link to='/shop-react' className='footer__link'>Trabalhe Conosco</Link>
            </article>
        </div>
        <div className="footer__copy">
            <small>2023 Márcio Reis - &copy;Todos os direitos reservados.</small>
        </div>
    </footer>
  )
}

export default Footer