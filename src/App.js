import React from 'react'
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cart from './components/Cart';
import NavMenu from './components/NavMenu';


function App() {
  return (
    <div className="App">
     <Router>
       <Navbar />
       <Cart />
        <NavMenu />
        <Routes>
          <Route path="/products/:handle" element={<ProductPage />}>          
          </Route>
          <Route path="/" element={<Home />}>          
          </Route>
        </Routes>
      <Footer />
     </Router>   
    </div>
  );
}

export default App;
