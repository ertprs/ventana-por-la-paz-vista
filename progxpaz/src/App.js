import React from 'react';
import './Sass/app.scss';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import { ProductPage } from './Pages/ProductPage';
import { ShopPage } from './Pages/ShopPage';
import Header from './Components/Header';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import {
    faSearch, faHeart as heartFill, faSquare, faCheckSquare,
    faEye, faEyeSlash, faPen,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as heartStroke } from '@fortawesome/free-regular-svg-icons';

library.add(
    faSearch, heartFill, faSquare, faCheckSquare,
    faEye, faEyeSlash, faPen, heartStroke, faWhatsapp
);

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/product' component={ProductPage} />
                    <Route path='/shop' component={ShopPage} />
                </Switch>
            </BrowserRouter>
        </>
    );
}
