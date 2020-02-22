import React, { Component } from 'react';
import ProductDescription from '../Components/ProductDescription';
import Section from '../Components/Section';


export class ProductPage extends Component {
  render() {
    return (
    <>
        <ProductDescription />
        <div className='container'>
            <div className='row'>
                <div className='col-xs-12'>
                    <Section />
                </div>
            </div>
        </div>
    </>
    );
  }
}
