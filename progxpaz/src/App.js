import React from 'react';
import './Sass/index.scss';
import { Home } from './Pages/Home';
import { ProductPage } from './Pages/ProductPage';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Category } from './Components/Category';
import Header from './Components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
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
  );
}

export default App;
