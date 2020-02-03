import React, { Component, useState } from 'react';
import Logo from '../../Assets/images/Grupo 14.png';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  NavItem,
  Collapse,
  Form,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  Button,
  Input,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
} from 'reactstrap';

function RenderRight(logged) {
  if (!logged) {
    return (
      <div className='anonimus'>
        <h1>Hola</h1>
      </div>
    );
  }
  return <h3>Estoy logeado</h3>;
}

export default class Header extends Component {
  render() {
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
                  <Label htmlFor='searchbar' hidden></Label>
                  <Input
                    placeholder='Qué estás buscando hoy?'
                    className='searchbar-input'
                    id='searchbar'
                  ></Input>
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
                    F
                  </Button>
                </InputGroupAddon>
              </InputGroup>
            </NavItem>
          </Nav>
          <Nav navbar>
            <Button className='mr-2' color='primary'>
              Login
            </Button>
            <Button color='secondary'>Crear Cuenta</Button>
          </Nav>
        </Navbar>
      </header>
    );
  }
}
