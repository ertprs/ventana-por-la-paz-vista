import React from 'react';
import { Link } from 'react-router-dom';
import img from '../Assets/images/img.jpg';
import { LikeButton } from './Objects';

export function ProductCard( { name, description} ) {
    return (
        <div style={{  }}  className={'w-48 h-64 m-1 flex flex-col shadow-md rounded-md'}>
            <div className='relative'>
                <Link to={'/product'}>
                    <img
                        className={
                            'w-full h-32 bg-greyrose rounded-t-md bg-no-repeat bg-local bg-center'
                        }
                        src={img}
                        alt={'Imagen de ' + name}
                    />
                </Link>
                <div className={'absolute top-0 right-0'}>
                    <LikeButton />
                </div>
            </div>
            <Link to={'/product'}>
                <div  className={'p-2'}>
                    <h2 className={'font-bold text-primary-500 text-lg tracking-tight'}>
                        {name}
                    </h2>
                    <p className={'mt-2'}>{description.substr(0, 40)}...</p>
                </div>
            </Link>
        </div>
    );
}

export function ShopCard( { name, description, shop_id } ) {
    return (
        <div style={{  }}  className={'w-48 h-64 m-1 flex flex-col shadow-md rounded-md'}>
            <div className='relative'>
                <Link to={'/shop/'+shop_id}>
                    <img
                        className={
                            'w-full h-32 bg-greyrose rounded-t-md bg-no-repeat bg-local bg-center'
                        }
                        src={img}
                        alt={'Imagen de ' + name}
                    />
                </Link>
                <div className={'absolute top-0 right-0'}>
                    <LikeButton />
                </div>
            </div>
            <Link to={'/shop/'+shop_id}>
                <div  className={'p-2'}>
                    <h2 className={'font-bold text-primary-500 text-lg tracking-tight'}>
                        {name}
                    </h2>
                    <p className={'mt-2'}>{description.substr(0, 40)}...</p>
                </div>
            </Link>
        </div>
    );
}

