import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export class LikeButton extends Component {

    state = {
      taken : false
    };

    setLiked = () => {
        this.setState({
            taken : !this.state.taken
        })
    }

    render() {
        let {taken} = this.state;
        return (
            <div className={'like-button'} onClick={this.setLiked}>
                {taken?
                    <FontAwesomeIcon className={'icon taken'} icon={ 'heart' } />
                    :
                    <FontAwesomeIcon className={'icon'} icon={['far', 'heart']} />
                }
            </div>
        );
    }
}