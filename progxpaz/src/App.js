import React from 'react';
import './Sass/main.scss';

import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import { ProductPage } from './Pages/ProductPage';
import { Category } from './Components/Category';
import { Header } from './Components/Header';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faSearch as search,
  faHeart as heartFill,
  faSquare as square,
  faCheckSquare as check,
  faEye as eye,
  faEyeSlash as eyeSlash,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as heartStroke } from '@fortawesome/free-regular-svg-icons';
import { ShopPage } from './Pages/ShopPage';

library.add(fab, search, heartFill, heartStroke, check, square, eye, eyeSlash);

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />

          <Route path='/product' component={ProductPage} />

          <Route path='/category' component={Category} />

          <Route path='/shop' component={ShopPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
