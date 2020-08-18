import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class LikeButton extends Component {
  state = {
    taken: false,
  };

  setLiked = () => {
    this.setState({
      taken: !this.state.taken,
    });
  };

  render() {
    let { taken } = this.state;
    return (
      <div
        className={
          ' h-10 w-10 p-1 mr-2 mt-2 z-10 rounded-full bg-secondary-100 shadow-md flex justify-center items-center duration-200 '
        }
        onClick={this.setLiked}
      >
        {taken ? (
          <FontAwesomeIcon
            className={'h-12 w-12 text-primary-500 duration-200 scale-150'}
            icon={'heart'}
          />
        ) : (
          <FontAwesomeIcon
            className={'h-12 w-12 text-primary-400'}
            icon={['far', 'heart']}
          />
        )}
      </div>
    );
  }
}
