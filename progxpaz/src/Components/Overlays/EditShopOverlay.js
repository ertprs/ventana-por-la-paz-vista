import React from 'react';
import Modal from './Modal';
import { Label, InputField } from '../Objects';

export default function EditShopOverlay(props) {
  // Props
  const {
    toggleModal,
    setToggleModal,
    title,
    setTitle,
    description,
    setDescription,
  } = props;
  const closeModal = () => setToggleModal(false);

  return (
    <Modal close={closeModal} toggle={toggleModal} footer={Footer(closeModal)}>
      <h2 className='form-title'>Agregar producto</h2>
      <Label forHtml='shop-title' label='Nombre de la tienda' />
      <InputField
        type='text'
        name='shop-title'
        id='shop-title'
        placeholder='Tienda la prosperidad'
        onChange={(e) => setTitle(e.target.value)}
      />
      <Label forHtml='shop-description' label='Descripción de la tienda' />
      <textarea
        className='form-input textarea'
        type='textarea'
        name='shop-description'
        id='shop-description'
        placeholder='Vendemos ropa al por mayor'
        onChange={(e) => setDescription(e.target.value)}
      />
    </Modal>
  );
}

const Footer = (close) => (
  <div className='flex'>
    <div className='w-1/2 pr-1'>
      <button className='form-button secondary' onClick={close}>
        Cancelar
      </button>
    </div>
    <div className='pl-1 w-1/2'>
      <button className='form-button primary' onClick={close}>
        Editar
      </button>
    </div>
  </div>
);
