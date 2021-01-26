import React from 'react';
import Modal from './Modal';
import { Label, InputField } from '../Objects';

export default function EditShopOverlay( props ) {
    // Props
    const {
        toggleModal,
        setToggleModal,
        title,
        description,
        setFieldValue,
    } = props;
    
    // Functions
    const closeModal = () => setToggleModal(false);
    
    const editValueWrapper = (e) => setFieldValue(e.target.name, e.target.value)
    
    
    return (
        <Modal close={closeModal} toggle={toggleModal} footer={Footer(closeModal)}>
            <h2 className='form-title'>Agregar producto</h2>
            <Label forHtml='shop-title' label='Nombre de la tienda' />
            <InputField
                type='text'
                name='nombre'
                id='shop-title'
                placeholder='La Prosperidad'
                value={title}
                onChange={editValueWrapper}
            />
            <Label forHtml='shop-description' label='Descripción de la tienda' />
            <textarea
                className='form-input textarea'
                // type='textarea'
                name='descripcion'
                id='shop-description'
                placeholder='Vendemos ropa al por mayor'
                value={description}
                onChange={editValueWrapper}
            />
        </Modal>
    );
}

const Footer = ( close ) => (
    <div className='flex'>
        <div className='w-1/2 pr-1'>
            <button className='form-button btn-secondary' onClick={close}>
                Cancelar
            </button>
        </div>
        <div className='pl-1 w-1/2'>
            <button className='form-button btn-primary' onClick={close}>
                Editar
            </button>
        </div>
    </div>
);
