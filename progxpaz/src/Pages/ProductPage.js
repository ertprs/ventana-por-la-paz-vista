import React, { useState } from 'react';
import Section from '../Components/Section';
import ProductCard from '../Components/ProductCard';
import { LikeButton } from "../Components/Objects/LikeButton";
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { CreateProductOverlay } from "../Components/Overlays/CreateProductOverlay";

export function ProductPage() {
    const [ modal, setModal ] = useState(false);
    const [ title, setTitle ] = useState(false);
    const [ description, setDescription ] = useState(false);
    
    const toggle = () => {
        setModal(!modal);
    };
    
    return (
        <>
            <div className='container expand-md'>
                <div className='row align-items-center'>
                    <div className='col-xs-1 flex-column'>
                        <div className='box' />
                        <div className='box' />
                        <div className='box' />
                        <div className='box' />
                        <div className='box' />
                    </div>
                    <div className='col-xs-5 ml-5'>
                        <div className='carousel' />
                    </div>
                    <div className='col-md-6 col-sm-12 align-self-start mt-3'>
                        <h5>Nombre de la tienda</h5>
                        <div className='d-flex align-items-baseline'>
                            <h1 className='mr-3'>{title ? title : 'Nombre del producto'}</h1>
                            <LikeButton />
                        </div>
                        <p>
                            {description ? description :
                                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptate, sint quo beatae perferendis ipsum fugiat sapiente velit aut? Magni dolor, placeat fugit dignissimos totam deleniti. Mollitia omnis ab perferendis'
                            }
                        </p>
                        {/* <div className='prod-info prod-desc'>
                         <h5 className='info-price-orig'>cop 32.000</h5>
                         <h4 className='info-price-new'>cop 15.000</h4>
                         <h5 className='info-price-perc'>50% off</h5>
                         </div> */}
                        <button className='btn btn-primary btn-comprar'>
                            Contactar al vendedor
                        </button>
                        {/* <div className='tags-container'>
                         <span className='tag'>tag</span>
                         <span className='tag'>tag</span>
                         <span className='tag'>tag</span>
                         <span className='tag'>tag</span>
                         </div> */}
                         <br />
                        <button className='mt-3 btn btn-primary' onClick={toggle}>
                            Editar
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
                                            onChange={( e ) => setTitle(e.target.value)}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for='description'>Descripción del producto</Label>
                                        <Input
                                            type='textarea'
                                            name='description'
                                            id='description'
                                            placeholder='Zapatos para hombre. Color marrón. Talla 38.'
                                            onChange={( e ) => setDescription(e.target.value)}
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

