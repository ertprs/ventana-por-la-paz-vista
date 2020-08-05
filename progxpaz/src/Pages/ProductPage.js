import React, { Component } from 'react';
import ProductDescription from '../Components/ProductDescription';
import Section from '../Components/Section';
import ProductCard from '../Components/ProductCard';

export class ProductPage extends Component {
  render() {
    return (
      <>
        <ProductDescription />
        <Section title={'Productos parecidos'}>
          <ProductCard
            name='Gorra'
            price={30000}
            category='Ropa'
            discountPrice={15000}
            discountPercentage={50}
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quidem laudantium unde reiciendis tenetur minus harum tempore accusamus perspiciatis voluptas ex est atque autem ab illo eligendi, placeat repudiandae alias!'
            shop={false}
          />
          <ProductCard
            name='Correa'
            price={60000}
            category='Ropa'
            discountPrice={54000}
            discountPercentage={10}
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quidem laudantium unde reiciendis tenetur minus harum tempore accusamus perspiciatis voluptas ex est atque autem ab illo eligendi, placeat repudiandae alias!'
            shop={false}
          />
          <ProductCard
            name='Pantalón'
            price={20000}
            category='Ropa'
            discountPrice={15000}
            discountPercentage={20}
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quidem laudantium unde reiciendis tenetur minus harum tempore accusamus perspiciatis voluptas ex est atque autem ab illo eligendi, placeat repudiandae alias!'
            shop={false}
          />
        </Section>
      </>
    );
  }
}
