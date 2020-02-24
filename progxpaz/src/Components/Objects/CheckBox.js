import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export class CheckBox extends Component {


    constructor(props, context) {
        super(props,context);

        this.state = {
            desc : props.text,
            pressed : props.pressed
        };
        //this.updateDesc(props.text, props.pressed);
    }

    updateDesc(newDesc, newState = false) {
        if (this.state.desc !== newDesc || this.state.pressed !== newState) {
            this.setState({
                desc : newDesc,
                pressed : newState
            })
        }
    }

    setChecked = () => {
        this.setState({
            pressed : !this.state.pressed
        })
    };

    render() {
        let {desc, pressed} = this.state;

        return (
            <div className={'check-box'} onClick={this.setChecked}>
                {pressed ?
                    <FontAwesomeIcon className={'icon pressed'} icon={'check-square'}/>
                    :
                    <FontAwesomeIcon className={'icon'} icon={'square'}/>
                }
                <span className={'text'}>{desc}</span>
            </div>
        );
    }
}
