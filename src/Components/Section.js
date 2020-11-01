import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Section( { title, children, } ) {
    return (
        <div className={'my-2 container'}>
            <div className={'text-primary-500 flex items-center'}>
                <span
                    className={
                        'mt-2 text-2xl sm:text-3xl md:text-4xl ' +
                        'lg:text-6xl title font-semibold tracking-tight'
                    }
                >
                {' '}{title}{' '}
                </span>
                {/* <span className={'ml-1 underline'}> ver más </span> */}
            </div>
            <div className={'flex w-full py-2 section-type-rows'}>
                {children}
            </div>
        </div>
    );
}

export function Carrousel( { title, children } ) {
    const [ scroll, setScroll ] = useState(0)
    
    function handleScrolling( direction ) {
        const step = Math.floor((window.innerWidth - 100) / 100) * 100;
        const delta = step * direction;
        const maxScroll = (children.length * 200)
        let endResult = scroll + delta;
        if ( endResult < 0 ) {
            if ( scroll !== 0 ) {
                endResult = 0;
            } else {
                endResult = maxScroll - (step * 0.9);
            }
        } else if ( endResult >= maxScroll ) {
            endResult = 0;
        }
        setScroll(endResult);
    }
    
    return (
        <div className={'my-2 container'}>
            <div className={'text-primary-500 flex items-center'}>
                <span
                    className={
                        'mt-2 text-2xl sm:text-3xl md:text-4xl ' +
                        'lg:text-6xl title font-semibold tracking-tight'
                    }
                >
                {' '}{title}{' '}
                </span>
                {/* <span className={'ml-1 underline'}> ver más </span> */}
            </div>
            <div className={'flex w-full'}>
                
                <button
                    className={'section-button btn-secondary left'}
                    onClick={() => handleScrolling(-1)}
                >
                    <FontAwesomeIcon icon={'chevron-left'} />
                </button>
                
                <div className={'section-type-scroll'}>
                    <div
                        style={{
                            transform : 'translate(-' + scroll + 'px, 0)',
                            transition : '0.5s',
                            width : (310 * children.length) + 'px'
                        }}
                        className={'flex'}
                    >
                        {children}
                    </div>
                </div>
                
                <button
                    className={'section-button btn-secondary right'}
                    onClick={() => handleScrolling(1)}
                >
                    <FontAwesomeIcon icon={'chevron-right'} />
                </button>
            
            </div>
        </div>
    );
}

export function ImageCarrousel( { children } ) {
    const [ scroll, setScroll ] = useState(0)
    const carrouselRef = useRef(null);
    
    function handleScrolling( direction ) {
        const step = carrouselRef.current.clientWidth;
        const delta = step * direction;
        const maxScroll = (children.length * carrouselRef.current.clientWidth)
        let endResult = scroll + delta;
        if ( endResult < 0 ) {
            endResult = endResult + maxScroll
        } else if ( endResult >= maxScroll ) {
            endResult = 0;
        }
        setScroll(endResult);
    }
    
    // console.log(children.length * window.innerWidth)
    
    let carrouselWidth = window.innerWidth - (35 * 2) - (50 * 2) - 17;
    
    return (
        <div className={'my-2'}>
            <div className={'flex '}>
                
                <button
                    className={'section-button btn-secondary left'}
                    onClick={() => handleScrolling(-1)}
                >
                    <FontAwesomeIcon icon={'chevron-left'} />
                </button>
                
                <div
                    style={{ height : '400px', overflowY : 'hidden' }}
                    className={'section-type-scroll'}
                    ref={carrouselRef}
                >
                    <div
                        style={{
                            transform : 'translate(-' + scroll + 'px, 0)',
                            transition : '0.5s',
                            width : (children.length * carrouselWidth) + 'px'
                        }}
                        className={'flex items-center'}
                        // className={'w-auto'}
                    >
                        {children}
                    </div>
                </div>
                
                <button
                    className={'section-button btn-secondary right'}
                    onClick={() => handleScrolling(1)}
                >
                    <FontAwesomeIcon icon={'chevron-right'} />
                </button>
            
            </div>
        </div>
    );
}
