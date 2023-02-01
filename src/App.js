import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route />
        </Routes>
      </Router>
    </>
  );
}

export default App;
