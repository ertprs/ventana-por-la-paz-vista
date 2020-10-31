import React from 'react';
import { Link } from 'react-router-dom';
import img from '../Assets/images/img.jpg';
import { LikeButton } from './Objects';

export default function ProductCard( { name, description, shop } ) {
    return (
        <div style={{  }}  className={'w-48 h-64 mx-1 flex flex-col shadow-md rounded-md'}>
            <div className='relative'>
                <Link to={shop ? '/shop' : '/product'}>
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
            <Link to={shop ? '/shop' : '/product'}>
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
