import React, {Component} from 'react';

export class BlackOut extends Component {

    sendCancel = (e) => {

    };

    render() {
        return (
            <div className={'overlay-bkg'} onClick={this.sendCancel}>

            </div>
        );
    }
}
