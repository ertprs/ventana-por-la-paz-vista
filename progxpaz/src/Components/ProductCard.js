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
    <Link
      to={shop ? '/shop' : '/product'}
      className='hover:transform hover:scale-125 duration-200'
    >
      <div className='relative w-48 h-64 m-1 flex flex-col shadow-md rounded-md'>
        <img
          className='w-full h-32 bg-greyrose rounded-t-md bg-no-repeat bg-local bg-center'
          src={img}
          alt={'Imagen de ' + name}
        ></img>
        <div className={'absolute top-0 right-0'}>
          <LikeButton />
        </div>
        <div className='p-2'>
          <h2 className='font-bold text-primary-500 text-lg tracking-tight'>
            {name}
          </h2>
          <p className='mt-2'>{description.substr(0, 40)}...</p>
        </div>
      </div>
    </Link>
  );
}
