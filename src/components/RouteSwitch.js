import React from 'react';
import App from '../App';
import Products from '../components/Products';
import Cart from './Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function RouteSwitch() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/shopping-cart' element={<App />} />
                <Route path='/shopping-cart/products' element={<Products />} />
                <Route path='/shopping-cart/cart' element={<Cart />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;
