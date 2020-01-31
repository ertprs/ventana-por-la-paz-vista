import React from 'react';
import './App.css';
import {Home} from "./Components/Home";
import {ProductPage} from "./Components/ProductPage";
import {Route, Switch} from "react-router-dom";
import {Category} from "./Components/Category";

function App() {
  return (
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/product">
          <ProductPage />
        </Route>
        <Route path="/category">
          <Category />
        </Route>
      </Switch>
  );
}

export default App;
