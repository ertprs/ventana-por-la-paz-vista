import React, { useState, Fragment } from 'react';
import Logo from '../Assets/images/logo.png';
import { Search } from './Search';
import LogInOverlay from './Overlays/LogInOverlay';
import SignUpOverlay from './Overlays/SignUpOverlay';
import { Link } from 'react-router-dom';

export default function Header() {
    const [ isLogged, setLogged ] = useState(false);
    const [ activeOverlay, setOverlay ] = useState('');
    
    return (
        <Fragment>
            <Modals closeOverlayCallback={() => setOverlay('')} setLogged={setLogged} activeOverlay={activeOverlay} />
            <header className={'container my-2 flex sm:justify-between items-center'}>
                <nav className={'flex flex-grow items-center'}>
                    <Link to='/' className={'mx-1'}>
                        <img src={Logo} alt='Logo de ventana por la paz' />
                    </Link>
                    <Search />
                </nav>
                <div className={'sm:flex' + (isLogged ? ' hidden' : '')}>
                    <button
                        onClick={() => setOverlay('sign-in')}
                        className={'w-32 h-10 p-2 mr-2 flex-shrink-0 bg-primary-500 text-white rounded-md shadow hover:font-semibold'}
                    >
                        Iniciar sesión
                    </button>
                    <button
                        onClick={() => setOverlay('sign-up')}
                        className={'w-32 h-10 p-2 mr-2 flex-shrink-0 bg-white text-primary-500 rounded-md border-primary-500 shadow hover:font-semibold'}
                    >
                        Crear cuenta
                    </button>
                </div>
            </header>
        </Fragment>
    );
}

function Modals( { activeOverlay, setLogged, closeOverlayCallback } ) {
    switch ( activeOverlay ) {
        case 'sign-in':
            return <Fragment>
                <div className={'overlay-bkg'} onClick={closeOverlayCallback}>
                    {' '}
                </div>
                <LogInOverlay callback={( value ) => {
                    closeOverlayCallback();
                    setLogged(true)
                }} />
            </Fragment>
        case 'sign-up':
            return <Fragment>
                <div className={'overlay-bkg'} onClick={closeOverlayCallback}>
                    {' '}
                </div>
                <SignUpOverlay />
            </Fragment>
        default:
            return <Fragment />
    }
}
