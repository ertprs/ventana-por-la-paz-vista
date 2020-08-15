import React, { useState } from 'react';
import Logo from '../Assets/images/logo.png';
import { Button } from 'reactstrap';
import { Search } from './Search';
import LogInOverlay from './Overlays/LogInOverlay';
import SignUpOverlay from './Overlays/SignUpOverlay';
import { ProfileOverlay } from './Overlays/ProfileOverlay';
import { Link } from 'react-router-dom';

export default function Header() {
  const [state, setState] = useState({
    logged: false,
    overlay: '',
  });

  const escCancel = (e) => {
    if ((e.key === 'Escape' || e.key === 'Esc') && state.overlay !== '') {
      setNoOverlay();
    }
  };

  const setNoOverlay = (e) => {
    setState({
      overlay: '',
    });
  };

  const setLogOverlay = (e) => {
    setState({
      overlay: 'li',
    });
  };

  const setSignOverlay = (e) => {
    setState({
      overlay: 'su',
    });
  };

  const AnonHeader = () => (
    <div className={'user-header'}>
      <Button onClick={setLogOverlay} className='mr-2' color='primary'>
        Login
      </Button>
      <Button onClick={setSignOverlay} className='mr-2' color='secondary'>
        Sign Up
      </Button>
    </div>
  );

  const UserHeader = () => <div className={'user-header'} />;

  return (
    <>
      {state.overlay === '' ? (
        <> </>
      ) : (
        <>
          <div className={'overlay-bkg'} onClick={setNoOverlay}>
            {' '}
          </div>
          {state.overlay === 'li' ? (
            <LogInOverlay
              callback={(value) => {
                setNoOverlay();
                setState({ logged: true });
              }}
            />
          ) : (
            <> </>
          )}
          {state.overlay === 'su' ? <SignUpOverlay /> : <> </>}
          {state.overlay === 'p' ? <ProfileOverlay /> : <> </>}
        </>
      )}
      <header className='container my-2 flex sm:justify-between items-center'>
        <nav className='flex flex-grow items-center'>
          <Link to='/' className='mx-1'>
            <img src={Logo} alt='Logo de ventana por la paz' />
          </Link>
          <Search />
        </nav>
        <div className='hidden sm:flex'>
          <button className='w-32 h-10 p-2 mr-2 flex-shrink-0 bg-primary-500 text-white rounded-md shadow hover:font-semibold'>
            Iniciar sesión
          </button>
          <button className='w-32 h-10 p-2 mr-2 flex-shrink-0 bg-white text-primary-500 rounded-md border-primary-500 shadow hover:font-semibold'>
            Crear cuenta
          </button>
          {/* {state.logged ? UserHeader() : AnonHeader()} */}
        </div>
      </header>
    </>
  );
}
