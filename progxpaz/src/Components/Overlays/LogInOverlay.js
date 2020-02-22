import React, {Component} from 'react';
import {BlackOut} from "./BlackOut";
import {CheckBox} from "../Objects/CheckBox";
import {InputField} from "../Objects/InputField";

export class LogInOverlay extends Component {

    render() {
        return (
            <>
                <div className={'abs-center log-in'}>
                    <div className={'bold title'}>
                        Iniciar Sesión
                    </div>

                    <div className={'label'}>
                        Correo Electronico
                    </div>

                    <div className={'input'}>

                    </div>

                    <div className={'label'}>
                        <span>
                            Contraseña
                        </span>
                        <span className={'blue-text'}>
                            Olvidé mi contraseña
                        </span>
                    </div>

                    <InputField />


                    <CheckBox text={'Remember me'}/>


                    <div className={'white-text blue-bkg bold button'}>
                        Log In
                    </div>



                    <div>
                        <div>
                        Don't have an account?
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
