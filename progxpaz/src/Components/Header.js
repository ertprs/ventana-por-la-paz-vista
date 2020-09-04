import React, { useState, Fragment } from 'react';
import Logo from '../Assets/images/logo.png';
import { Search } from './Search';
import LogInOverlay from './Overlays/LogInOverlay';
import SignUpOverlay from './Overlays/SignUpOverlay';
import { Link } from 'react-router-dom';

export default function Header() {
  // State
  const [isLogged, setLogged] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [signupModal, setSignupModal] = useState(false);

  return (
    <Fragment>
      <header className={'container my-2 flex sm:justify-between items-center'}>
        <nav className={'flex flex-grow items-center'}>
          <Link to='/' className={'mx-1'}>
            <img src={Logo} alt='Logo de ventana por la paz' />
          </Link>
          <Search />
        </nav>
        <div className={'sm:flex' + (isLogged ? ' hidden' : '')}>
          <button
            onClick={() => setLoginModal(true)}
            className='w-32 h-10 p-2 mr-2 flex-shrink-0 bg-primary-500 text-white rounded-md shadow hover:font-semibold focus:outline-none'
          >
            Iniciar sesión
          </button>
          <button
            onClick={() => setSignupModal(true)}
            className='w-32 h-10 p-2 mr-2 flex-shrink-0 bg-white text-primary-500 rounded-md border-primary-500 shadow hover:font-semibold focus:outline-none'
          >
            Crear cuenta
          </button>
        </div>
      </header>
      <LogInOverlay toggleModal={loginModal} setToggleModal={setLoginModal} />
      <SignUpOverlay
        toggleModal={signupModal}
        setToggleModal={setSignupModal}
      />
    </Fragment>
  );
}
