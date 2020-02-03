import React, { Component } from 'react';
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
    const logged = false;

    return (
      <header>
        <Navbar expand='lg'>
          <div className='container'>
            <NavbarBrand href='/'>
              <img
                className='logo'
                src={Logo}
                alt='Logo de ventana por la paz'
              />
            </NavbarBrand>
            <Nav navbar>
              <NavItem>
                <InputGroup>
                  <InputGroupAddon addonType='prepend'>
                    <Label htmlFor='searchbar' hidden></Label>
                    <Input
                      placeholder='Qué estás buscando hoy?'
                      id='searchbar'
                    ></Input>
                  </InputGroupAddon>
                  <select className='custom-select' name='filter'>
                    <option value='tipo'>tipo</option>
                  </select>
                  <InputGroupAddon addonType='append'>
                    <button type='submit'>F</button>
                  </InputGroupAddon>
                </InputGroup>
              </NavItem>
            </Nav>
            <NavbarToggler>
              <Collapse></Collapse>
            </NavbarToggler>
          </div>
        </Navbar>
      </header>
    );
  }
}
