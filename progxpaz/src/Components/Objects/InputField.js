import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export class InputField extends Component {

    state = {
        isPassword : false,
        visible : false
    };

    

    render() {
        let {isPassword, visible} = this.state;

        return (
            <div className={'input-field'}>
                <input className={'inner-input'} type={isPassword? "password" : "text"}>
                </input>

                {isPassword ?
                    <div className={'icon'}>
                        {visible ?
                            <FontAwesomeIcon className={'icon'} icon={'eye'}/>
                            :
                            <FontAwesomeIcon className={'icon'} icon={'eyeSlash'}/>
                        }
                    </div>
                    :
                    <> </>
                }
            </div>
        );
    }
}
