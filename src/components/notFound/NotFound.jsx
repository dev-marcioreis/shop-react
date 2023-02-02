import './notFound.css'
import { Link } from 'react-router-dom'
import { FcHome } from 'react-icons/fc'
import { GiChewedHeart as Heart } from 'react-icons/gi'

const NotFound = () => {
  return (
    <>
        <div className="section notfound">
            <div className="container flex2">
                <h2>Passei a vida tentando corrigir os erros que cometi na minha ânsia de acertar.</h2>
                <i className='heart'><Heart /></i>
                <p>página não encontrada!</p>
                <Link to='/shop-react' className='back-home'>
                    <i><FcHome /></i>
                    <span>volte para a casinha</span>
                </Link>
            </div>
        </div>
    </>
  )
}

export default NotFound