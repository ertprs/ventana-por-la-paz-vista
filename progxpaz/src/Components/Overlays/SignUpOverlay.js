import React, { useState } from 'react';
import { InputField } from '../Objects/InputField';
import { CheckBox } from '../Objects/CheckBox';
import { Button, Label } from 'reactstrap';
import { SignUp } from '../../Services/Api';

export default function SignUpOverlay() {
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form);
  };

  const accept = () => {
    SignUp(form.firstname, form.email, form.password);
  };

  return (
    <>
      <div className={'abs-center overlay sign-up'}>
        <div className={'top'}>
          <div className={'bold title'}>Crea una cuenta</div>

          <div className={'flex-row'}>
            <div className={'half'}>
              <Label for='firstname' className={'label'}>
                Primer Nombre
              </Label>

              <InputField
                id='firstname'
                name='firstname'
                value={form.firstname}
                onChange={(e) => handleChange(e)}
              />
            </div>

            <div className={'half'}>
              <Label for='lastname' className={'label'}>
                Apellido
              </Label>
              <InputField
                id='lastname'
                name='lastname'
                value={form.lastname}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

          <div className=''>
            <Label for='email' className={'label'}>
              Correo Electronico
            </Label>

            <InputField
              id='email'
              name='email'
              value={form.email}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className=''>
            <Label for='password' className={'label'}>
              Contraseña
            </Label>

            <InputField
              password
              id='password'
              name='password'
              value={form.password}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <span className={'desc'}>
            No compartiremos tu información con nadie
          </span>

          <Button onClick={accept} color='primary'>
            Crear
          </Button>

          <div className={'flex-col'}>
            <span className={'desc center-text'}>
              Al presionar "crear" usted está aceptando los
            </span>
            <span className={'blue-text desc center-text'}>
              términos y condiciones, política de privacidad
            </span>
          </div>
        </div>
        <div className={'action-call'}>
          <div>¿Ya tiene una cuenta?</div>
          <div className={'bold blue-text action'}>Iniciar sesión</div>
        </div>
      </div>
    </>
  );
}
