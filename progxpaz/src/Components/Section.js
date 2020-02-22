import React, { Component } from 'react';
import { ProductCard } from './ProductCard';

export default class Section extends Component {

    state = {
        title : '',
        link : ''
    };

    render() {
        let {title} = this.state;

        return (
          <div className={'section'}>
            <div className={'title'}>
              <span className={'main'}> {title} </span>
              <span className={'link'}> ver mas </span>
            </div>
            <div className={'flex-row'}>
              <ProductCard
                name='Blusa'
                price={30000}
                category='Ropa'
                discountPrice={15000}
                discountPercentage={50}
              />
              <ProductCard
                name='Zapatos'
                price={60000}
                category='Ropa'
                discountPrice={54000}
                discountPercentage={10}
              />
              <ProductCard
                name='Correa'
                price={20000}
                category='Ropa'
                discountPrice={15000}
                discountPercentage={20}
              />
            </div>
          </div>
        );
  }
}
