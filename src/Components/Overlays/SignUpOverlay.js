import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import { CreateProfile, CreateShop, LinkProfileShop } from '../../Services/Api';
import SignUpForm from './SignUpForm';

export default function SignUpOverlay( props ) {
    // State
    const [ form, setForm ] = useState({
        firstname : '',
        lastname : '',
        email : '',
        password : '',
        shop : '',
        shopDesc : '',
        indicative : 0,
        whatsapp : 0,
        address : '',
        valid : false,
    });
    const [ idShop, setIdShop ] = useState('');
    const [ idProfile, setIdProfile ] = useState('');
    
    // Props
    const { toggleModal, setToggleModal, switchPage } = props;
    
    // Functions
    const handleChange = ( e ) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value,
            valid : validateForm(),
        });
    };
    
    // All inputs have info? then return true, otherwise return false
    const validateForm = () => {
        return form.firstname &&
            form.lastname &&
            form.email &&
            form.password &&
            form.shop &&
            form.shopDesc &&
            form.indicative &&
            form.whatsapp &&
            form.address;
    };
    
    useEffect(() => {
        async function LinkUserShop() {
            if ( idProfile && idShop ) {
                await LinkProfileShop(idProfile, idShop)
                    .then(function ( res ) {
                        if ( res.status !== 200 ) {
                            switchPage();
                        }
                    })
                    .catch(( err ) => console.error(err));
            }
        }
        
        LinkUserShop();
    }, [ idProfile, idShop, switchPage ]);
    
    const handleSignUp = async () => {
        let shop = await CreateShop(
            form.shop,
            form.shopDesc,
            form.indicative,
            form.whatsapp,
            form.address
        ).then(( res ) => {
            if ( res.status !== 201 ) {
                throw new Error('InvalidResponse');
            } else {
                setIdShop(res.data['id']);
            }
        }).catch(( er ) => {
            console.error(er);
        });
        
        await CreateProfile(
            `${form.firstname} ${form.lastname}`,
            form.email,
            form.password
        ).then(( res ) => {
            if ( res.status !== 201 ) {
                throw new Error('InvalidResponse');
            } else {
                setIdProfile(res.data.id);
            }
        }).catch(( er ) => {
            console.error(er);
        });
        
    };
    
    const Footer = () => (
        <div className={'action-call'}>
            <div>¿Ya tiene una cuenta?</div>
            <div className={'bold blue-text action'} onClick={switchPage}>
                Iniciar sesión
            </div>
        </div>
    );
    
    return (
        <>
            <Modal
                toggle={toggleModal}
                close={() => setToggleModal(false)}
                stylesBody='overflow-y-scroll'
                footer={Footer()}
            >
                <SignUpForm form={form} handleChange={handleChange} />
                <span className='text-secondary-400 my-1 text-xs '>
          No compartiremos tu información con nadie
        </span>
                <button onClick={handleSignUp} className='form-button btn-primary'>
                    Crear
                </button>
                <p className='text-sm text-center'>
                    Al presionar "crear" usted está aceptando los
                </p>
                <p className='text-sm text-center text-primary-500'>
                    términos y condiciones, política de privacidad
                </p>
            </Modal>
        </>
    );
}
