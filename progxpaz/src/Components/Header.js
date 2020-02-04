import React, { Component } from 'react';
import Logo from '../Assets/images/logo.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { Navbar, NavbarBrand, Nav, NavItem, InputGroup, InputGroupAddon, Button, Input, Label} from 'reactstrap';

export class Header extends Component {

  state = {
    logged : false
  };

  render() {
    let {logged} = this.state;

    return (
      <header>
        <Navbar expand='lg'>
          <NavbarBrand href='/'>
            <img className='logo' src={Logo} alt='Logo de ventana por la paz' />
          </NavbarBrand>
          <Nav navbar className='mr-auto'>
            <NavItem>
              <InputGroup>
                <InputGroupAddon addonType='prepend'>
                  <Label htmlFor='searchbar' hidden> </Label>
                  <Input
                    placeholder='¿ Qué estás buscando hoy ?'
                    className='searchbar-input'
                    id='searchbar'
                  > </Input>
                </InputGroupAddon>
                <select className='custom-select' name='filter'>
                  <option value='tipo'>tipo</option>
                </select>
                <InputGroupAddon addonType='append'>
                  <Button
                    type='submit'
                    color='primary'
                    className='searchbar-button'
                  >
                    <FontAwesomeIcon icon={'search'} />
                  </Button>
                </InputGroupAddon>
              </InputGroup>
            </NavItem>
          </Nav>

          {logged? this.UserHeader() : this.AnonHeader()}

        </Navbar>
      </header>
    );
  }

  AnonHeader() {
    return(<>
      <Nav navbar>
        <Button className='mr-2' color='primary'> Login </Button>
        <Button color='secondary'>Sign Up</Button>
      </Nav>
    </>);
  }

  UserHeader() {
    return(<>

    </>);
  }

}
