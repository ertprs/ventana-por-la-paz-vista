import React, { Component } from 'react';
import ProductDescription from '../Components/ProductDescription';
import Section from '../Components/Section';


export class ProductPage extends Component {
  render() {
    return (
    <>
        <ProductDescription />
        <Section title={'Productos parecidos'} />
    </>
    );
  }
}
