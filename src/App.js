import './App.css';
import Header from './components/layout/header';

import Home from './components/pages/home'
import { BrowserRouter, Routes, Route,}
    from 'react-router-dom';
import Products from './components/pages/products';
import Details from './components/pages/details';
import Category from './components/pages/category';
import Login from './components/pages/login';
import Search from './components/pages/searchres';
import Cart from './components/pages/cart';
import { useEffect, useState } from 'react';




function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>

    <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/products/:page' element={<Products/>}/>
                <Route path='/details/:id' element={<Details/>}/>
                <Route path='/category/:category' element={<Category/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/search/:searchterm' element={<Search/>}/>
                <Route path='/cart' element={<Cart/>}/>
                

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;



