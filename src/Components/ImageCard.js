import React from 'react';
import img1 from '../Assets/images/img1.jpg';
import img2 from '../Assets/images/img2.jpg';
import { Link } from "react-router-dom";

export function ImageCard( { alt, link, curimg } ) {
    let img = curimg === 1 ? img1 : img2 ;
    return (
        <div className={'flex-1 flex items-center shadow-md rounded-md'}>
            <Link to={link}>
                <img
                    className={'w-full'
                        // 'w-full h-32 bg-greyrose rounded-t-md bg-no-repeat bg-local bg-center'
                    }
                    src={img}
                    alt={alt}
                />
            </Link>
        </div>
    );
}

