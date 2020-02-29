import React from 'react';
import { LikeButton } from './Objects/LikeButton';

export default function ProductDescription() {
  return (
    <>
      <div className='container expand-md'>
        <div className='row align-items-center'>
          <div className='col-xs-1 flex-column'>
            <div className='box' />
            <div className='box' />
            <div className='box' />
            <div className='box' />
            <div className='box' />
          </div>
          <div className='col-xs-5 ml-5'>
            <div className='carousel' />
          </div>
          <div className='col-md-6 col-sm-12 align-self-start mt-3'>
            <h5>vendedor</h5>
            <div className='d-flex align-items-baseline'>
              <h1 className='mr-3'>Nombre del producto</h1>
              <LikeButton />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              voluptate, sint quo beatae perferendis ipsum fugiat sapiente velit
              aut? Magni dolor, placeat fugit dignissimos totam deleniti.
              Mollitia omnis ab perferendis?
            </p>
            <div className='prod-info prod-desc'>
              <h5 className='info-price-orig'>cop 32.000</h5>
              <h4 className='info-price-new'>cop 15.000</h4>
              <h5 className='info-price-perc'>50% off</h5>
            </div>
            <button className='btn btn-primary btn-comprar'>
              Comprar ahora!
            </button>
            <div className='tags-container'>
              <span className='tag'>tag</span>
              <span className='tag'>tag</span>
              <span className='tag'>tag</span>
              <span className='tag'>tag</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
