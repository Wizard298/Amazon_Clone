import React from 'react';
import './App.css';
import Footer from './components/html_part/Footer';
import Header from './components/html_part/Header';
import Main from './components/html_part/mainComponent/Main';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/html_part/Cart';
import AddToKartPage from './components/html_part/AddToKartPage';
import ScrollToTop from './components/html_part/ScrollToTop';

function App() {
  return (
    <>
      <Header/>
      <ScrollToTop/>
      
      <Routes>
        <Route path = "/"  element={<Main/>}/>
        <Route path = "/cart"  element={<Cart/>}/>
        <Route path = "/addtocart"  element={<AddToKartPage/>}/>
      </Routes>
      {/* <Main/> */}
      <Footer/>
    </>
  );
}

export default App;
