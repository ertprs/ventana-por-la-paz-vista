import React, { useState } from 'react';
import Modal from './Modal';
import { InputField, Label } from '../Objects';
import { CreateProfile, CreateShop, LinkProfileShop } from '../../Services/Api';

export default function SignUpOverlay(props) {
  // State
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

  // Props
  const { toggleModal, setToggleModal } = props;

  // Functions
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
      form.password
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
      form.address
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

    await LinkProfileShop(idProfile, idShop)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <Modal
        toggle={toggleModal}
        close={() => setToggleModal(false)}
        footer={Footer()}
      >
        <h2 className='form-title'>Crea una cuenta</h2>
        <h2 className='form-subtitle'>Información del usuario</h2>
        <div className='flex-row'>
          <div className='half'>
            <Label forHtml='firstname' label='Primer Nombre' />

            <InputField
              id='firstname'
              name='firstname'
              value={form.firstname}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className={'half'}>
            <Label forHtml='lastname' label='Apellido' />

            <InputField
              id='lastname'
              name='lastname'
              value={form.lastname}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className={''}>
          <Label forHtml='email' label='Correo Electronico' />

          <InputField
            id='email'
            name='email'
            value={form.email}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className={''}>
          <Label forHtml='password' label='Contraseña' />

          <InputField
            password
            id='password'
            name='password'
            value={form.password}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <h2 className='form-subtitle mt-4'>
          Información de la ventana virtual
        </h2>
        <Label forHtml='shop' label='Nombre del negocio' />

        <InputField
          id='shop'
          name='shop'
          value={form.shop}
          onChange={(e) => handleChange(e)}
        />
        <Label forHtml='shopDesc' label='Descripción del negocio' />

        <InputField
          id='shopDesc'
          name='shopDesc'
          value={form.shopDesc}
          onChange={(e) => handleChange(e)}
        />

        <Label forHtml='indicative' label='Indicativo' />

        <InputField
          id='indicative'
          name='indicative'
          type='number'
          value={form.indicative}
          onChange={(e) => handleChange(e)}
        />

        <Label forHtml='whatsapp' label='Whatsapp' />

        <InputField
          id='whatsapp'
          name='whatsapp'
          type='number'
          value={form.whatsapp}
          onChange={(e) => handleChange(e)}
        />

        <Label forHtml='address' label='Dirección del negocio' />

        <InputField
          id='address'
          name='address'
          value={form.address}
          onChange={(e) => handleChange(e)}
        />

        <span className={'desc my-1'}>
          No compartiremos tu información con nadie
        </span>
        <button onClick={handleSignUp} className='form-button'>
          Crear
        </button>
        <p className='text-center'>
          Al presionar "crear" usted está aceptando los
        </p>
        <p className='text-center text-primary-500'>
          términos y condiciones, política de privacidad
        </p>
      </Modal>
    </>
  );
}

const Footer = () => (
  <div className={'action-call'}>
    <div>¿Ya tiene una cuenta?</div>
    <div className={'bold blue-text action'}>Iniciar sesión</div>
  </div>
);
