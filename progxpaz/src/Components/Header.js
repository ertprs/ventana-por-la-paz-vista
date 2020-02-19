import React, { Component } from 'react';
import Logo from '../Assets/images/logo.png';
import { Button } from 'reactstrap';
import { Search } from './Search';
import { LogIn } from './LogIn';

export class Header extends Component {
  state = {
    logged: false,
    overlay: '',
  };

  setProfOverlay = () => {
    this.setState({
      overlay: 'p',
    });
  };

  setLogOverlay = () => {
    this.setState({
      overlay: 'li',
    });
  };

  setSignOverlay = () => {
    this.setState({
      overlay: 'su',
    });
  };

  render() {
    let { logged, overlay } = this.state;

    return (
      <>
        {overlay === 'li' ? <LogIn /> : <> </>}
        <div className={'header'}>
          <div className={'flex-row'}>
            <a href='/' className={'logo'}>
              <img src={Logo} alt='Logo de ventana por la paz' />
            </a>

            <Search />
          </div>

          {logged ? this.UserHeader() : this.AnonHeader()}
        </div>
      </>
    );
  }

  AnonHeader() {
    return (
      <div className={'user-header'}>
        <Button onClick={this.setLogOverlay} className='mr-2' color='primary'>
          {' '}
          Login{' '}
        </Button>
        <Button color='secondary'>Sign Up</Button>
      </div>
    );
  }

  UserHeader() {
    return <div className={'user-header'}></div>;
  }
}
