import React from 'react';
import { img } from '../Assets/images/img.jpg';
import { LikeButton } from './LikeButton';

export function ProductCard({
  name,
  price,
  category,
  discountPrice,
  discountPercentage,
}) {
  const productName = name;
  const productPrice = price;
  const productCategory = category;
  const productDiscount = discountPrice;
  const productDiscountPer = discountPercentage;

  return (
    <div className={'product-card'} style={{ backgroundImage: img }}>
      <div className={'row-body'}>
        <div className={'prod-name'}>{productName}</div>

        <div className={'prod-info'}>
          <div className={'info-price-orig'}>COP {productPrice}</div>

          <div className={'info-price-new'}>COP {productDiscount}</div>

          <div className={'info-price-perc'}>{productDiscountPer}% OFF</div>
        </div>
      </div>

      <div className={'row-top'}>
        <div className={'row-like'}>
          <LikeButton />
        </div>

        <div className={'row-img'}></div>

        <div className={'row-cat'}>
          <div className={'cat-tag'}>{productCategory}</div>
        </div>
      </div>
    </div>
  );
}
