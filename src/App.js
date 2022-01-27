import React from 'react'
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
     <Router>
       <Navbar />
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
