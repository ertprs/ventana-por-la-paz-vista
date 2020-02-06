import React from 'react';
import './Sass/index.scss';

import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Home } from './Pages/Home';
import { ProductPage } from './Pages/ProductPage';
import { Category } from './Components/Category';
import { Header } from './Components/Header';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSearch as search, faHeart as heartFill } from '@fortawesome/free-solid-svg-icons'
import { faHeart as heartStroke } from '@fortawesome/free-regular-svg-icons'

library.add(fab, search, heartFill, heartStroke);

export default function App() {
  return (
      <>
        <Header />

        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/product'>
              <ProductPage />
            </Route>
            <Route path='/category'>
              <Category />
            </Route>
          </Switch>
        </BrowserRouter>
    </ >
  );
}