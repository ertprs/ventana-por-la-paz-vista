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
import LogoArn from './Assets/images/LogoARN.png'
import LogoPeace from './Assets/images/LogoPEACEDEV.png'


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
                <Footer/>
            </Provider>
        );
    }
}


const Footer = () => {
    return <footer className='w-full mt-3 p-4 text-gray-600 bg-primary-100'>
        <p className='text-center'>
            Hecho con
            <span>
                <FontAwesomeIcon
                    className={'h-12 w-12 mx-2 align-middle'}
                    color='red'
                    icon={'heart'}
                />
            </span>
            por 
            <a 
                href='https://www.peacedev.co'
                className='text-gray-700'
                target="_blank"
                rel="noopener noreferrer"
            > PeaceDev</a>
            {' '} en alianza con {' '}
            <a 
                href='http://www.reincorporacion.gov.co/'
                className='text-gray-700'
                target="_blank"
                rel="noopener noreferrer"
            >ARN Atlántico</a>
        </p>
        <div className='flex flex-row justify-center'>
            <div className="mr-4">
                <img src={LogoPeace} className=' h-20' alt='Logo de PeaceDev'/>
                <img src={LogoArn} className='w-40' alt='Logo de ARN'/>
            </div>
            <div className="">
                <ul>
                    <li>Angie Zuñiga</li>
                    <li>Yennifer Herrera</li>
                    <li>Jaisir Bayuelo</li>
                    <li>Andres Movilla</li>
                    <li>Carlos Ruiz</li>
                </ul>
            </div>
        </div>
    </footer>
}
