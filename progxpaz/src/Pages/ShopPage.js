import React, { useState } from 'react';
import { LikeButton } from '../Components/Objects';
import { Section } from '../Components/Section';
import ProductCard from '../Components/ProductCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

export function ShopPage() {
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState(false);
  const [description, setDescription] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className='container'>
        <div className='flex mt-10'>
          <div className=''>
            <div className=' w-32 h-32 rounded-full bg-primary-400 m-8' />
          </div>
          <div className='w-3/5 ml-4'>
            <div className={'flex items-center mb-8'}>
              <h1
                className={
                  'mr-3 text-xl md:text-3xl text-secondary-500 font-semibold'
                }
              >
                {title ? title : 'Nombre de Tienda'}
              </h1>
              <LikeButton />
            </div>
            <p>
              {description
                ? description
                : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptate, sint quo beatae perferendis ipsum fugiat sapiente velit aut? Magni dolor, placeat fugit dignissimos totam deleniti. Mollitia omnis ab perferendis'}
            </p>

            <button className='inline-button secondary' onClick={toggle}>
              Editar
              <FontAwesomeIcon className={'ml-2 text-xl'} icon='pen' />
            </button>
            <Modal
              isOpen={modal}
              toggle={toggle}
              className={'modal-dialog-centered'}
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
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for='description'>Descripción de la tienda</Label>
                    <Input
                      type='textarea'
                      name='description'
                      id='description'
                      placeholder='Venta de calzado'
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </FormGroup>
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button color='secondary' onClick={toggle} className={'mr-2'}>
                  Cancelar
                </Button>
                <Button color='primary' onClick={toggle}>
                  Editar
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </div>
      </div>
      <Section title={'Productos'}>
        <ProductCard
          name='Gorra'
          price={30000}
          category='Ropa'
          discountPrice={15000}
          discountPercentage={50}
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quidem laudantium unde reiciendis tenetur minus harum tempore accusamus perspiciatis voluptas ex est atque autem ab illo eligendi, placeat repudiandae alias!'
          shop={false}
        />
        <ProductCard
          name='Correa'
          price={60000}
          category='Ropa'
          discountPrice={54000}
          discountPercentage={10}
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quidem laudantium unde reiciendis tenetur minus harum tempore accusamus perspiciatis voluptas ex est atque autem ab illo eligendi, placeat repudiandae alias!'
          shop={false}
        />
        <ProductCard
          name='Pantalón'
          price={20000}
          category='Ropa'
          discountPrice={15000}
          discountPercentage={20}
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quidem laudantium unde reiciendis tenetur minus harum tempore accusamus perspiciatis voluptas ex est atque autem ab illo eligendi, placeat repudiandae alias!'
          shop={false}
        />
      </Section>
    </>
  );
}
