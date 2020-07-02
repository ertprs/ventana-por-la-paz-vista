import React, { Component } from 'react';
import Logo from '../Assets/images/logo.png';
import { Button } from 'reactstrap';
import { Search } from './Search';
import { LogInOverlay } from './Overlays/LogInOverlay';
import {SignUpOverlay} from "./Overlays/SignUpOverlay";
import {ProfileOverlay} from "./Overlays/ProfileOverlay";

export class Header extends Component {

  state = {
    logged: false,
    overlay: '',
  };

  escCancel = (e) => {
    if (e.key === "Escape" && this.state.overlay !== '') {
      this.setNoOverlay();
    }
  };

  setNoOverlay = (e) => {
    this.setState({
      overlay: '',
    });
  };

  setProfOverlay = (e) => {

    this.setState({
      overlay: 'p',
    });
  };

  setLogOverlay = (e) => {

    this.setState({
      overlay: 'li',
    });
  };

  setSignOverlay = (e) => {

    this.setState({
      overlay: 'su',
    });
  };

  render() {
    let { logged, overlay } = this.state;

    return (
      <>
        {overlay === ''? <> </> : <>
          <div className={'overlay-bkg'} onClick={this.setNoOverlay}> </div>
          {overlay === 'li' ?  <LogInOverlay /> : <> </>}
          {overlay === 'su' ?  <SignUpOverlay /> : <> </>}
          {overlay === 'p' ?  <ProfileOverlay /> : <> </>}
          </>
        }
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
          Login
        </Button>
        <Button onClick={this.setSignOverlay} className='mr-2' color='secondary'>
          Sign Up
        </Button>
      </div>
    );
  }

  UserHeader() {
    return <div className={'user-header'}/>;
  }
}
