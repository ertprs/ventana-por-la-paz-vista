import React, {Component} from 'react';

export class BlackOut extends Component {

    sendCancel = (e) => {

            //this.props.sendCancel();

    };

    render() {
        return (
            <div className={'overlay-bkg'} onClick={this.sendCancel}>

            </div>
        );
    }
}
