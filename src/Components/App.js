import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'; 

import Header from './Header';
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
            </Router>
        </div>
    );
}


export default App;