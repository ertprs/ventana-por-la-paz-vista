import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export class CheckBox extends Component {

    state = {
        desc : '',
        pressed : false
    };

    componentDidMount() {
        this.updateDesc(this.props.text,this.props.pressed);
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
        console.log(this.state);
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
