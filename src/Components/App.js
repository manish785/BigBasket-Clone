import React from 'react';
import { Route, Routes } from 'react-router-dom'; 

import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import Products from './Products';
import CartPage from '../Pages/CartPage';
// import PaymentPage from '../Pages/PaymentPage/PaymentPage';
// import PaymentConfirmPage from '../Pages/PaymentConfirmPage';
import PaymentPage from "../Pages/PaymentPage/index";
// import PaymentConfirm from "./pages/PaymentPage/Components/PaymentConfirm";
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
            {/* <Route path="payment/confirm" element={<PaymentConfirmPage />} /> */}
          </Route>
        </Routes>
        <Footer />
      </>
    );
}


export default App;