import { Link } from 'react-router-dom'
import { AiFillFacebook, AiOutlineTwitter, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import './footer.css'

const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <div className="footer__logo">
                  <Link to='/'><h2 className='logo'>shop</h2></Link>
                </div>
                <p>As melhores marcas e os melhores produtos.</p>
                <div className="footer__social">
                    <a href="https://www.facebook.com/" target="_blank" rel='noreferrer noopener'><AiFillFacebook /></a>
                    <a href="https://twitter.com/" target="_blank" rel='noreferrer noopener'><AiOutlineTwitter /></a>
                    <a href="https://www.instagram.com/" target="_blank" rel='noreferrer noopener'><AiFillInstagram /></a>
                    <a href="https://www.linkedin.com/" target="_blank" rel='noreferrer noopener'><AiFillLinkedin /></a>
                </div>
            </article>
            <article>
                <h4>Institucional</h4>
                <Link to='/' className='link'>Home</Link>
                <Link to='/' className='link'>Sobre Nós</Link>
                <Link to='/' className='link'>Categorias</Link>
                <Link to='/' className='link'>Fale Conosco</Link>
            </article>
            <article>
                <h4>Suporte</h4>
                <Link to='/' className='link'>Pedidos</Link>
                <Link to='/' className='link'>Entrega</Link>
                <Link to='/' className='link'>Devolução</Link>
                <Link to='/' className='link'>Cancelamento</Link>
            </article>
            <article>
                <h4>Corporativo</h4>
                <Link to='/' className='link'>FAQ</Link>
                <Link to='/' className='link'>Imprensa</Link>
                <Link to='/' className='link'>Mpa do site</Link>
                <Link to='/' className='link'>Trabalhe Conosco</Link>
            </article>
        </div>
        <div className="footer__copy">
            <small>2023 Márcio Reis - &copy;Todos os direitos reservados.</small>
        </div>
    </footer>
  )
}

export default Footer