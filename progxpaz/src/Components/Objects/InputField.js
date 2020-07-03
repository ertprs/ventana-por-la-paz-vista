import React, { Component } from 'react';
import { Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class InputField extends Component {
  state = {
    isPassword: false,
    visible: false,
  };

  componentDidMount() {
    this.setState({
      isPassword: this.props.password,
    });
  }

  flipVisible = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  setInputFocus = () => {
    this.trueInput.focus();
  };

  render() {
    let { isPassword, visible } = this.state;

    return (
      <div className={'input-field'} onClick={this.setInputFocus}>
        <Input
          ref={(input) => {
            this.trueInput = input;
          }}
          id={this.props.id}
          name={this.props.name}
          value={this.props.value}
          onChange={this.props.onChange}
          className={'inner-input'}
          type={isPassword && !visible ? 'password' : 'text'}
        ></Input>

        {isPassword ? (
          <div className={'icon'} onClick={this.flipVisible}>
            {visible ? (
              <FontAwesomeIcon className={'icon'} icon={'eye'} />
            ) : (
              <FontAwesomeIcon className={'icon'} icon={'eye-slash'} />
            )}
          </div>
        ) : (
          <> </>
        )}
      </div>
    );
  }
}
