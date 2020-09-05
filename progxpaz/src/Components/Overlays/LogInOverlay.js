import React, { useState } from 'react';
import { CheckBox, InputField, Label } from '../Objects';
import { Login } from '../../Services/Api';
import Modal from './Modal';

export default function LogInOverlay(props) {
  // State
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  // Props
  const { toggleModal, setToggleModal } = props;

  // Login Function
  const accept = async () => {
    await Login(username, password)
      .then((res) => {
        if (res.status === 200) {
          setToken(res.data['key']);
          console.log(token);
        }
      })
      .catch((er) => {
        console.error(er);
      });
  };

  return (
    <Modal
      toggle={toggleModal}
      close={() => setToggleModal(false)}
      footer={Footer()}
    >
      <div className='form-title'>Iniciar Sesión</div>

      <Label forHtml='username' label='Correo Electronico' />

      <InputField
        name='username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <div className=''>
        <Label forHtml='password' label='Contraseña' />
        <span className='text-sm p-1 tracking-tight text-primary-500 float-right'>
          Olvidé mi contraseña
        </span>
      </div>

      <InputField
        password={true}
        name='password'
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <CheckBox text={'Remember me'} />

      <button onClick={accept} className='form-button'>
        Iniciar Sesión
      </button>
    </Modal>
  );
}

const Footer = () => (
  <div className='action-call '>
    <div>¿No tiene una cuenta?</div>
    <div className={'bold blue-text action'}>Crear Cuenta</div>
  </div>
);
