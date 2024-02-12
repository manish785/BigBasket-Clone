import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'; // Updated import

import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import Products from './Products';
import Login from './Login';

function App() {
    const routes = (
      <Routes>
        <Route path='/' element={<Body />} />
        <Route path='/products' element={<Products />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    )

    return (
        <div className="App">
            <Router>
              <Header/>
              {routes}
              <Footer/>
            </Router>
        </div>
    );
}

export default App;
