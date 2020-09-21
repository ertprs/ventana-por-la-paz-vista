import React from 'react';
import './Sass/app.scss';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import { ProductPage } from './Pages/ProductPage';
import { ShopPage } from './Pages/ShopPage';
import Header from './Components/Header';
import { Provider } from './AuthContext';

export default function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/product' component={ProductPage} />
          <Route path='/shop' component={ShopPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
