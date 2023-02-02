import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import NotFound from './components/notFound/NotFound';
import Cart from './components/cart/Cart'



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/shop-react' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
