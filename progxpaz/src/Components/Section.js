import React, { Component } from 'react';

export default class Section extends Component {
  state = {
    title: '',
    link: '',
  };

  componentDidMount() {
    this.setState({
      title: this.props.title,
      link: this.props.link,
    });
  }

  render() {
    let { title } = this.state;

    return (
      <div className={'my-2 container'}>
        <div className={'text-primary-500 flex items-center'}>
          <span
            className={
              'mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-6xl title font-semibold tracking-tight'
            }
          >
            {' '}
            {title}{' '}
          </span>
          {/* <span className={'ml-1 underline'}> ver más </span> */}
        </div>
        <div className={'flex overflow-x-auto w-auto py-2'}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
