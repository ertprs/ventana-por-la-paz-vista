import React, { useState } from 'react';
import Section from '../Components/Section';
import ProductCard from '../Components/ProductCard';
import img from '../Assets/images/img.jpg';
import { Link } from 'react-router-dom';
import { LikeButton } from '../Components/Objects';
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'reactstrap';
// import { CreateProductOverlay } from '../Components/Overlays/CreateProductOverlay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function ProductPage() {
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState(false);
  const [description, setDescription] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className='sm:grid sm:grid-cols-2 md:-mb-8'>
        <div>
          <img
            src={img}
            alt='Imagen de la tienda'
            className='w-64 h-64 md:h-full md:w-full md:p-8 mx-auto my-4 rounded-sm'
          />
        </div>
        <div className='p-2 mb-4 self-center'>
          <div className='flex flex-no-wrap'>
            <div className=''>
              <h1 className='mr-3 text-xl md:text-3xl text-secondary-500 font-semibold'>
                {title ? title : 'Accesorio de cocina'}
              </h1>
              <Link to='/shop' className='no-underline'>
                <h5 className='text-sm text-secondary-300 leading-snug hover:text-primary-500'>
                  Almacén Rosalía
                </h5>
              </Link>
            </div>
            <LikeButton />
          </div>
          <p className='my-2 md:my-4'>
            {description
              ? description
              : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptate, sint quo beatae perferendis ipsum fugiat sapiente velit aut? Magni dolor, placeat fugit dignissimos totam deleniti. Mollitia omnis ab perferendis'}
          </p>
          <button className='p-2 my-2 block text-white rounded-md bg-primary-500 text-center'>
            Contacta al vendedor
            <FontAwesomeIcon
              className='text-2xl text-white ml-2'
              icon={['fab', 'whatsapp']}
            />
          </button>
          <button
            className='p-2 my-2 block rounded-md border border-primary-500 text-primary-500 text-center'
            onClick={toggle}
          >
            Editar
            <FontAwesomeIcon className='ml-2 text-xl' icon='pen' />
          </button>
          <Modal
            isOpen={modal}
            toggle={toggle}
            className='modal-dialog-centered'
          >
            <ModalHeader toggle={toggle}>Editar producto</ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup>
                  <Label for='title'>Nombre del producto</Label>
                  <Input
                    type='text'
                    name='title'
                    id='title'
                    placeholder='Zapatos Mocasín'
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for='description'>Descripción del producto</Label>
                  <Input
                    type='textarea'
                    name='description'
                    id='description'
                    placeholder='Zapatos para hombre. Color marrón. Talla 38.'
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color='secondary' onClick={toggle} className='mr-2'>
                Cancelar
              </Button>
              <Button color='primary' onClick={toggle}>
                Editar
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
      <Section title={'Productos parecidos'}>
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
