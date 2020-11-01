import React, { Component, Fragment } from 'react';
import './Sass/app.scss';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Home } from './Pages/Home';
import { ProductPage } from './Pages/ProductPage';
import { ShopPage } from './Pages/ShopPage';
import Header from './Components/Header';
import { Provider } from './AuthContext';
import { SearchPage } from "./Pages/SearchPage";

export class App extends Component {
    
    render() {
        return (
            <Provider>
                <BrowserRouter>
                    <Switch>
                        <Route
                            exact path='/'
                            render={( props ) => {
                                return <Fragment>
                                    <Header {...props} />
                                    <div className={'main-content'}>
                                        <Home {...props} />
                                    </div>
                                </Fragment>
                            }}
                        />
                        
                        <Route
                            path='/product'
                            render={( props ) => {
                                return <Fragment>
                                    <Header {...props} />
                                    <div className={'main-content'}>
                                        <ProductPage {...props} />
                                    </div>
                                </Fragment>
                            }}
                        />
                        
                        <Route
                            path='/shop'
                            render={( props ) => {
                                return <Fragment>
                                    <Header {...props} />
                                    <div className={'main-content'}>
                                        <ShopPage {...props} />
                                    </div>
                                </Fragment>
                            }}
                        />
                        
                        <Route
                            path='/search/:search_params'
                            render={( props ) => {
                                return <Fragment>
                                    <Header {...props} />
                                    <div className={'main-content'}>
                                        <SearchPage {...props} />
                                    </div>
                                </Fragment>
                            }}
                        />
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}
