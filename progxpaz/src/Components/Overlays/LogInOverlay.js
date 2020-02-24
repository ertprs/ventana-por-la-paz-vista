import React, {Component} from 'react';
import {CheckBox} from "../Objects/CheckBox";
import {InputField} from "../Objects/InputField";
import {Button} from "reactstrap";

export class LogInOverlay extends Component {

    accept = () => {

    };

    render() {
        return (
            <>
                <div className={'abs-center overlay log-in'}>
                    <div className={'bold title'}>
                        Iniciar Sesión
                    </div>

                    <div className={'label'}>
                        Correo Electronico
                    </div>

                    <InputField />

                    <div className={'label'}>
                        <span>
                            Contraseña
                        </span>
                        <span className={'blue-text'}>
                            Olvidé mi contraseña
                        </span>
                    </div>

                    <InputField password={true}/>

                    <CheckBox text={'Remember me'}/>

                    <Button onClick={this.accept} color='primary'>
                        Login
                    </Button>

                    <div className={'action-call'}>
                        <div>
                        ¿No tiene una cuenta?
                        </div>
                        <div className={'bold blue-text'}>
                            Sign Up
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
