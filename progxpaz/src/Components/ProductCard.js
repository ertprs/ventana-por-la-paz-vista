import React from 'react';
import img from '../Assets/images/img.jpg';
import {LikeButton} from "./Objects/LikeButton";

export function ProductCard({
  name,
  price,
  category,
  discountPrice,
  discountPercentage,
}) {
  return (
    <div className={'product-card'} style={{ backgroundImage: img }}>
      <div className={'row-body'}>
        <div className={'prod-name'}>{name}</div>

        <div className={'prod-info'}>
          <div className={'info-price-orig'}>COP {price}</div>

          <div className={'info-price-new'}>COP {discountPrice}</div>

          <div className={'info-price-perc'}>{discountPercentage}% OFF</div>
        </div>
      </div>

      <div className={'row-top'}>
        <div className={'row-like'}>
          <LikeButton />
        </div>

        <div className={'row-img'}/>

        <div className={'row-cat'}>
          <div className={'cat-tag'}>{category}</div>
        </div>
      </div>
    </div>
  );
}
