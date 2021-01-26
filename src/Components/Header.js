import React, { useState } from 'react';
import Logo from '../Assets/images/logo.png';
import { SearchInput } from './SearchInput';
import LogInOverlay from './Overlays/LogInOverlay';
import SignUpOverlay from './Overlays/SignUpOverlay';
import { Link } from 'react-router-dom';
import { Consumer } from '../AuthContext';
import { Logout } from '../Services/Api';

export function Header() {
    // State
    const [ loginModal, setLoginModal ] = useState(false);
    const [ signupModal, setSignupModal ] = useState(false);
    
    // Functions
    const switchPage = () => {
        setLoginModal(!loginModal);
        setSignupModal(!signupModal);
    };
    
    const endSession = async ( setAuth ) => {
        await Logout()
            .then(() => {
                sessionStorage.removeItem('token');
                setAuth(false);
            })
            .catch(( err ) => {
                console.error(err);
            });
    };
    
    return (
        <>
            <TopHeaderBar
            />
            <BottomHeaderBar
                setLoginModal={setLoginModal}
                endSession={endSession}
                setSignupModal={setSignupModal}
            />
            <LogInOverlay
                toggleModal={loginModal}
                setToggleModal={setLoginModal}
                switchPage={switchPage}
            />
            <SignUpOverlay
                toggleModal={signupModal}
                setToggleModal={setSignupModal}
                switchPage={switchPage}
            />
        </>
    );
}

function TopHeaderBar() {
    return <div className={'title-header'}>
        <div />
        <Link to={'/'}>
            ventana por la paz
        </Link>
        <Link to='/' className={'icon'}>
            <img src={Logo} alt='Logo de ventana por la paz' />
        </Link>
    </div>
}

function BottomHeaderBar( { setLoginModal, endSession, setSignupModal } ) {
    return <header style={{ marginLeft : '35px', marginRight : '35px' }}
                   className={'my-4 flex sm:justify-between items-center'}>
        <nav className={'flex flex-grow items-center'}>
            <SearchInput />
        </nav>
        <Consumer>
            {( { isAuth, setAuth } ) => (
                <div className='sm:flex'>
                    <button
                        onClick={() => setLoginModal(true)}
                        className={
                            'header-button btn-primary ' + (isAuth ? 'hidden' : '')
                        }
                    >
                        Iniciar sesión
                    </button>
                    <button
                        onClick={() => setSignupModal(true)}
                        className={
                            'header-button btn-secondary ' + (isAuth ? 'hidden' : '')
                        }
                    >
                        Crear cuenta
                    </button>
                    <button
                        onClick={() => endSession(setAuth)}
                        className={
                            'header-button btn-primary ' + (isAuth ? '' : 'hidden')
                        }
                    >
                        Salir
                    </button>
                </div>
            )}
        </Consumer>
    </header>
}
