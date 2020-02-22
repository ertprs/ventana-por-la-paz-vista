import React from 'react';

export default function ProductDescription() {
  return (
    <>
      <div className='container expand-md'>
        <div className='row align-items-center'>
          <div className='col-xs-1 flex-column'>
            <div className='box'/>
            <div className='box'/>
            <div className='box'/>
            <div className='box'/>
            <div className='box'/>
          </div>
          <div className='col-xs-5 ml-5'>
            <div className='carousel'/>
          </div>
          <div className='col-md-6 col-sm-12 align-self-start mt-3'>
            <h1>Nombre del producto</h1>
            <h3>$35.00</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              voluptate, sint quo beatae perferendis ipsum fugiat sapiente velit
              aut? Magni dolor, placeat fugit dignissimos totam deleniti.
              Mollitia omnis ab perferendis?
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
