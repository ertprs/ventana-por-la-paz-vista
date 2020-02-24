import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export class InputField extends Component {

    state = {
        isPassword : false,
        visible : false
    };

    componentDidMount() {
        this.setState({
            isPassword : this.props.password,
        })
    }

    flipVisible = () => {
        this.setState({
            visible : !this.state.visible,
        })
    };

    setInputFocus= () => {
        this.trueInput.focus();
    };

    render() {
        let {isPassword, visible} = this.state;

        return (
            <div className={'input-field'} onClick={this.setInputFocus}>
                <input
                    ref={(input) => { this.trueInput = input; }}
                    className={'inner-input'}
                    type={isPassword && !visible? "password" : "text"}>
                </input>

                {isPassword ?
                    <div className={'icon'} onClick={this.flipVisible}>
                        {visible ?
                            <FontAwesomeIcon className={'icon'} icon={'eye'}/>
                            :
                            <FontAwesomeIcon className={'icon'} icon={'eye-slash'}/>
                        }
                    </div>
                    :
                    <> </>
                }
            </div>
        );
    }
}
