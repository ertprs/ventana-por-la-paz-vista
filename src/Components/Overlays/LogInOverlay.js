import React, { useState } from 'react';
import { CheckBox, InputField, Label } from '../Objects';
import { Login } from '../../Services/Api';
import Modal from './Modal';
import { Consumer } from '../../AuthContext';
import { Redirect } from 'react-router-dom';

export default function LogInOverlay(props) {
  // State
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Props
  const { toggleModal, setToggleModal, switchPage } = props;

  // Login Function
  const handleSubmit = async (evt, setAuth) => {
    evt.preventDefault();

    if (username && password) {
      await Login(username, password)
        .then((res) => {
          sessionStorage.setItem('token', res.data['key']);
          setToggleModal(false);
          restartValues();
          setAuth(true);
        })
        .catch((er) => {
          console.error(er);
        });
    }
  };

  const restartValues = () => {
    setUsername('');
    setPassword('');
  };

  const foter = () => (
    <>
      <div className='action-call'>
        <div>¿No tiene una cuenta?</div>
        <div className='action' onClick={switchPage}>
          Crear Cuenta
        </div>
      </div>
    </>
  );

  return (
    <Consumer>
      {({ isAuth, setAuth }) =>
        isAuth ? (
          <Redirect to='/shop' />
        ) : (
          <Modal
            toggle={toggleModal}
            close={() => setToggleModal(false)}
            footer={Footer()}
          >
            <div className='form-title'>Iniciar Sesión</div>
            <form onSubmit={(e) => handleSubmit(e, setAuth)} noValidate>
              <Label forHtml='login-username' label='Correo Electronico' />

              <InputField
                name='login-username'
                id='login-username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <div>
                <Label forHtml='login-password' label='Contraseña' />
                <span className='text-sm p-1 tracking-tight text-primary-500 float-right'>
                  Olvidé mi contraseña
                </span>
              </div>

              <InputField
                password={true}
                name='login-password'
                id='login-password'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <CheckBox text={'Remember me'} />

              <button type='submit' className='form-button btn-primary'>
                Iniciar Sesión
              </button>
            </form>
          </Modal>
        )
      }
    </Consumer>
  );
}
