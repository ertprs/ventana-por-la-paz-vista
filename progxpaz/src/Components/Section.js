import React, { Component } from 'react';
import ProductCard from './ProductCard';

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
      <div className={'section'}>
        <div className={'title'}>
          <span className={'main'}> {title} </span>
          <span className={'link'}> ver mas </span>
        </div>
        <div className={'flex-row'}>{this.props.children}</div>
      </div>
    );
  }
}
