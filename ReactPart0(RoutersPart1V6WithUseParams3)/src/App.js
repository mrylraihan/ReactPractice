import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Product from './components/Pages/Product';
import Products from './components/Pages/Products';

function App() {
  const productList = [
    {id:1, name:'brush'},
    {id:2, name:'chair'},
    {id:3, name:'table'},
  ]
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/Products' element={<Products productList={productList}/>}/>
          <Route path='/Products/:id' element={<Product productList={productList}/>}/>
          <Route />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
