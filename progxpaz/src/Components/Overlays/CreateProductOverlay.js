import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

export class CreateProductOverlay extends Component {
    render() {
        return (
            <Modal
                // isOpen={modal}
                isOpen={true}
                // toggle={toggle}
                className='modal-dialog-centered'
            >
                <ModalHeader >Agregar producto</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for='title'>Nombre del producto</Label>
                            <Input
                                type='text'
                                name='title'
                                id='title'
                                placeholder='Zapatos Mocasín'
                                // onChange={( e ) => setTitle(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for='description'>Descripción del producto</Label>
                            <Input
                                type='textarea'
                                name='description'
                                id='description'
                                placeholder='Zapatos para hombre. Color marrón. Talla 38.'
                                // onChange={( e ) => setDescription(e.target.value)}
                            />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color='secondary' className='mr-2'>
                        Cancelar
                    </Button>
                    <Button color='primary'>
                        Agregar
                    </Button>
                </ModalFooter>
            </Modal>
        );
    }
}
