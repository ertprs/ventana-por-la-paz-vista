import React, { useState } from 'react';
import { InputField } from '../Objects/InputField';
import { CheckBox } from '../Objects/CheckBox';
import { Button, Label } from 'reactstrap';
import { CreateProfile, CreateShop, LinkProfileShop } from '../../Services/Api';
import { FormGroup } from 'reactstrap';

export default function SignUpOverlay() {
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    shop: '',
    shopDesc: '',
    indicative: '',
    whatsapp: 0,
    address: '',
    valid: false,
  });
  const [idShop, setIdShop] = useState('');
  const [idProfile, setIdProfile] = useState('');

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      valid:
        form.firstname &&
        form.lastname &&
        form.email &&
        form.password &&
        form.shop &&
        form.shopDesc &&
        form.indicative &&
        form.whatsapp &&
        form.address,
    });
  };

  const handleSignUp = async () => {
    await CreateProfile(
      `${form.firstname} ${form.lastname}`,
      form.email,
      form.password,
      process.env.REACT_APP_TOKEN
    )
      .then((res) => {
        if (res.status === 201) {
          setIdProfile(res.data['id']);
          console.log(idProfile);
        }
      })
      .catch((er) => {
        console.error(er);
      });

    await CreateShop(
      form.shop,
      form.shopDesc,
      form.indicative,
      form.whatsapp,
      form.address,
      process.env.REACT_APP_TOKEN
    )
      .then((res) => {
        if (res.status === 201) {
          setIdShop(res.data['id']);
          console.log(idShop);
        }
      })
      .catch((er) => {
        console.error(er);
      });

    await LinkProfileShop(idProfile, idShop, process.env.REACT_APP_TOKEN)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div className={'abs-center overlay sign-up'}>
        <div className={'top'}>
          <div className={'bold title pt-1'}>Crea una cuenta</div>
          <div className='content'>
            <h2 className='subtitle mt-3 mb-1'>Información del usuario</h2>
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
            <h2 className='subtitle mt-3 mb-1'>
              Información de la ventana virtual
            </h2>
            <FormGroup>
              <Label for='shop' className='label'>
                Nombre del negocio
              </Label>
              <InputField
                id='shop'
                name='shop'
                value={form.shop}
                onChange={(e) => handleChange(e)}
              />
            </FormGroup>
            <FormGroup>
              <Label for='shopDesc' className='label'>
                Descripción del negocio
              </Label>
              <InputField
                id='shopDesc'
                name='shopDesc'
                value={form.shopDesc}
                onChange={(e) => handleChange(e)}
              />
            </FormGroup>

            <FormGroup>
              <Label for='indicative' className='label'>
                Indicativo
              </Label>
              <InputField
                id='indicative'
                name='indicative'
                value={form.indicative}
                onChange={(e) => handleChange(e)}
              />
            </FormGroup>

            <FormGroup>
              <Label for='whatsapp' className='label'>
                Whatsapp
              </Label>
              <InputField
                id='whatsapp'
                name='whatsapp'
                value={form.whatsapp}
                onChange={(e) => handleChange(e)}
              />
            </FormGroup>

            <FormGroup>
              <Label for='address' className='label'>
                Dirección del negocio
              </Label>
              <InputField
                id='address'
                name='address'
                value={form.address}
                onChange={(e) => handleChange(e)}
              />
            </FormGroup>
          </div>

          <div className={'flex-col'}>
            <span className={'desc my-1'}>
              No compartiremos tu información con nadie
            </span>
            <Button onClick={handleSignUp} color='primary' className='my-2'>
              Crear
            </Button>
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
