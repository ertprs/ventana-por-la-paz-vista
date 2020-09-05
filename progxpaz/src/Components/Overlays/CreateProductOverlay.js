import React from 'react';
import Modal from './Modal';
import { Label, InputField } from '../Objects';

export default function CreateProductOverlay(props) {
  // Props
  const { toggleModal, setToggleModal } = props;

  return (
    <Modal
      close={() => setToggleModal(false)}
      toggle={toggleModal}
      footer={Footer()}
    >
      <h2 className='form-title'>Agregar producto</h2>
      <Label forHtml='title' label='Nombre del producto' />
      <InputField
        type='text'
        name='title'
        id='title'
        placeholder='Zapatos Mocasín'
        // onChange={( e ) => setTitle(e.target.value)}
      />
      <Label forHtml='description' label='Descripción del producto' />
      <textarea
        className='form-input textarea'
        type='textarea'
        name='description'
        id='description'
        placeholder='Zapatos para hombre. Color marrón. Talla 38.'
        // onChange={( e ) => setDescription(e.target.value)}
      />
    </Modal>
  );
}

const Footer = () => (
  <div className='flex'>
    <div className='w-1/2 pr-1'>
      <button className='form-button secondary'>Cancelar</button>
    </div>
    <div className='pl-1 w-1/2'>
      <button className='form-button primary'>Agregar</button>
    </div>
  </div>
);
