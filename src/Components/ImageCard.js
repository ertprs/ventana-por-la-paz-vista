import React from 'react';
import img0 from '../Assets/images/slide1.png'
import img1 from '../Assets/images/slide2.png'
import img2 from '../Assets/images/slide3.png'
import { Link } from "react-router-dom";

export function ImageCard( { alt, link, curimg } ) {
    let img
    switch (curimg) {
        case 0:
            img = img0
            break;
        case 1:
            img = img1
            break;
        case 2:
            img = img2
            break;
    
        default:
            break;
    }
    
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

