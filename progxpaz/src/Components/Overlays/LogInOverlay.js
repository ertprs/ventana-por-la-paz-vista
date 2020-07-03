import React, { useState } from 'react';
import { CheckBox } from '../Objects/CheckBox';
import { InputField } from '../Objects/InputField';
import { Button, Label } from 'reactstrap';
import { Login } from '../../Services/Api';

export default function LogInOverlay() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const accept = () => {
    Login(username, password);
  };

  return (
    <>
      <div className={'abs-center overlay log-in'}>
        <div className={'top'}>
          <div className={'bold title'}>Iniciar Sesión</div>

          <Label for='username' className={'label'}>
            Correo Electronico
          </Label>

          <InputField
            id='username'
            name='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <Label for='password' className={'label'}>
            <span>Contraseña</span>
            <span className={'blue-text'}>Olvidé mi contraseña</span>
          </Label>

          <InputField
            password={true}
            id='password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <CheckBox text={'Remember me'} />

          <Button onClick={accept} color='primary'>
            Login
          </Button>
        </div>
        <div className={'action-call'}>
          <div>¿No tiene una cuenta?</div>
          <div className={'bold blue-text action'}>Sign Up</div>
        </div>
      </div>
    </>
  );
}
