import React, { Component, Fragment } from 'react';
import './Sass/app.scss';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Header from './Components/Header';
import { Provider } from './AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LogoArn from './Assets/images/LogoARN.png'
import LogoPeace from './Assets/images/LogoPEACEDEV.png'
import { routes } from "./Utils/Routes";

export class App extends Component {
    
    render() {
        return (
            <Provider>
                <BrowserRouter>
                    <Header />
                    
                    <div className={'main-content'}>
                        <Switch>
                            {routes.map(( item, i ) => (
                                <Route
                                    {...item}
                                    key={i}
                                />
                            ))}
                        </Switch>
                    </div>
                    
                    <Footer />
                </BrowserRouter>
            </Provider>
        )
    }
}


const Footer = () => {
    return <footer className='w-full mt-3 p-4 text-gray-600 bg-primary-100 flex flex-col items-center'>
        
        <div className='w-3/4 flex flex-row justify-evenly'>
            <div className="m-3 flex-1">
                <img src={LogoPeace} className=' h-20' alt='Logo de PeaceDev' />
            </div>
            <div className="m-3 flex-1">
                <img src={LogoArn} className='w-40' alt='Logo de ARN' />
            </div>
            <div className="m-3 flex-1">
                <div className="flex justify-evenly">
                    <ul>
                        <li>Yennifer Herrera</li>
                        <li>Jaisir Bayuelo</li>
                    </ul>
                    <ul>
                        <li>Andres Movilla</li>
                        <li>Carlos Ruiz</li>
                    </ul>
                </div>
                <div className={'flex justify-center'}>
                    Angie Zuñiga
                </div>
            </div>
        </div>
        
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
    </footer>
}
