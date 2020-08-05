import React from 'react';
import { Link } from 'react-router-dom';
import img from '../Assets/images/img.jpg';
import { LikeButton } from './Objects/LikeButton';

export default function ProductCard({
  name,
  price,
  category,
  discountPrice,
  discountPercentage,
  description,
  shop,
}) {
  return (
    <Link to={shop ? '/shop' : '/product'}>
      <div className={'product-card'} style={{ backgroundImage: img }}>
        <div className={'row-body'}>
          <div className={'prod-name'}>{name}</div>
          <p className='prod-info'>{description.substr(0, 40)}...</p>
          {/* <div className={'prod-info'}>
          <div className={'info-price-orig'}>COP {price}</div>

          <div className={'info-price-new'}>COP {discountPrice}</div>

          <div className={'info-price-perc'}>{discountPercentage}% OFF</div>
        </div> */}
        </div>

        <div className={'row-top'}>
          <div className={'row-like'}>
            <LikeButton />
          </div>

          <div className={'row-img'} />

          {/* <div className={'row-cat'}>
            <div className={'cat-tag'}>{category}</div>
          </div> */}
        </div>
      </div>
    </Link>
  );
}
