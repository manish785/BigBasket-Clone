import React from 'react';
import { Route, Routes } from 'react-router-dom'; 

import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import Products from './Products';
import CartPage from '../Pages/CartPage';
import PaymentPage from "../Pages/PaymentPage/index";
import PaymentConfirm from "../Pages/PaymentPage/components/PaymentConfirm";
import PrivateRoute from '../PrivateRoute/PrivateRoute';


function App() {
    return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Body/>} />
          <Route path="/products" element={<Products />} />
          <Route path="/user" element={<PrivateRoute />}>
            <Route path="cart" element={<CartPage />} />
            <Route path="payment" element={<PaymentPage />} />
            <Route path="payment/confirm" element={<PaymentConfirm />} />
          </Route>
        </Routes>
        <Footer />
      </>
    );
}


export default App;