import './App.css';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Pages from './pages/Pages'
// import Home from './components/home/Home'
import NotFound from './components/notFound/NotFound';
import Cart from './components/cart/Cart'


function App() {
  return (
    <Router>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path='/shop-react' element={<Pages />} />
        <Route path='/shop-react/cart' element={<Cart />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
