import React from 'react';
import { Routes, Route, Router, Link, Switch, } from 'react-router-dom';
import Header from './components/MainPage';
import Cart from './components/Cart';
import './App.css';
import Catalog from './components/Catalog';
import Registration from './components/Registration'
// import Product from './components/Product';
import MainPage from './components/MainPage';
import ProductList from './components/ProductList';




const App = () => {
  return (
    <div className='header'>
      <Header />
      <Routes>
        <Route exact path="/" element={<MainPage />}/>
        <Route path="/Catalog" element={<Catalog />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/ProductList" element={<ProductList />} />
      </Routes>
        <Link to="/">Главная</Link>
        <Link to="/Catalog">Каталог</Link>
        <Link to="/Cart">Корзина</Link>
        <Link to="/Registration">Регистрация</Link>
        <Link to="/ProductList">ProductList</Link>
        
        
     
    </div>
  );
};


export default App;