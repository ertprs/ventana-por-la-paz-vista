import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export class LikeButton extends Component {
    render() {
        return (
            <div className={'like-button'}>
                <FontAwesomeIcon icon={'heartFill'} />
                <FontAwesomeIcon icon={'search'} />
            </div>
        );
    }
}
