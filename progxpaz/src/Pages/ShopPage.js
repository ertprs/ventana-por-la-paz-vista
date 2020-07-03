import React, { useState } from 'react';
import { LikeButton } from '../Components/Objects/LikeButton';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import Section from '../Components/Section';

export function ShopPage() {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className='container expand-md'>
        <div className='row align-items-center'>
          <div className='col-xs-5 ml-5'>
            <div className='carousel' />
          </div>
          <div className='col-md-6 col-sm-12 align-self-start mt-3'>
            <div className='d-flex align-items-baseline'>
              <h1 className='mr-3'>Nombre de Tienda</h1>
              <LikeButton />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              voluptate, sint quo beatae perferendis ipsum fugiat sapiente velit
              aut? Magni dolor, placeat fugit dignissimos totam deleniti.
              Mollitia omnis ab perferendis?
            </p>

            <div className='tags-container'>
              <span className='tag'>tag</span>
              <span className='tag'>tag</span>
              <span className='tag'>tag</span>
              <span className='tag'>tag</span>
            </div>
            <button className='mt-3 btn btn-primary' onClick={toggle}>
              Editar
            </button>
            <Modal
              isOpen={modal}
              toggle={toggle}
              className='modal-dialog-centered'
            >
              <ModalHeader toggle={toggle}>Editar tienda</ModalHeader>
              <ModalBody>
                <Form>
                  <FormGroup>
                    <Label for='title'>Nombre de la tienda</Label>
                    <Input
                      type='text'
                      name='title'
                      id='title'
                      placeholder='Tienda la prosperidad'
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for='description'>Descripción de la tienda</Label>
                    <Input
                      type='textarea'
                      name='description'
                      id='description'
                      placeholder='Venta de calzado'
                    />
                  </FormGroup>
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button color='secondary' onClick={toggle} className='mr-2'>
                  Cancel
                </Button>
                <Button color='primary' onClick={toggle}>
                  Do Something
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </div>
      </div>
      <Section title={'Productos'} />
    </>
  );
}
