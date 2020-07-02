import React, {Component} from 'react';
import {InputField} from "../Objects/InputField";
import {CheckBox} from "../Objects/CheckBox";
import {Button} from "reactstrap";

export class SignUpOverlay extends Component {

    render() {
        return (
            <>
                <div className={'abs-center overlay sign-up'}>
                    <div className={'top'}>
                        <div className={'bold title'}>
                            Crea una cuenta
                        </div>

                        <div className={'flex-row'}>
                            <div className={'half'}>
                                <span className={'label'}>
                                    Primer Nombre
                                </span>

                                <InputField />
                            </div>

                            <div className={'half'}>
                                <span className={'label'}>
                                    Apellido
                                </span>

                                <InputField />
                            </div>
                        </div>

                        <div className={'label'}>
                            Correo Electronico
                        </div>

                        <InputField />

                        <span className={'desc'}>
                            No compartiremos tu información con nadie
                        </span>

                        <Button onClick={this.accept} color='primary'>
                            Crear
                        </Button>

                        <div className={'flex-col'}>
                            <span className={'desc center-text'}>
                                Al presionar "crear" usted está aceptando los
                            </span>
                            <span className={'blue-text desc center-text'}>
                                términos y condiciones, política de privacidad
                            </span>
                        </div>
                    </div>
                    <div className={'action-call'}>
                        <div>
                            ¿Ya tiene una cuenta?
                        </div>
                        <div className={'bold blue-text action'}>
                            Iniciar sesión
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
