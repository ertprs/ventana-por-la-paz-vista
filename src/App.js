import React, { Component, Fragment } from 'react';
import './Sass/app.scss';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Home } from './Pages/Home';
import { ProductPage } from './Pages/ProductPage';
import { ShopPage } from './Pages/ShopPage';
import Header from './Components/Header';
import { Provider } from './AuthContext';
import { SearchPage } from "./Pages/SearchPage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


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
                                    <div className={'main-content mb-4'}>
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
                <Footer/>
            </Provider>
        );
    }
}


const Footer = () => {
    return <footer className='w-full h-20 text-gray-600 flex justify-center items-center bg-primary-100'>
        <span>Made with</span>
        <span><FontAwesomeIcon
          className={'h-12 w-12 mx-2 align-middle'}
          color='red'
          icon={'heart'}
        /></span>
        <span>by <a href='https://www.google.com' className='text-gray-700' target="_blank">PeaceDev</a></span>
    </footer>
}
