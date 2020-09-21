import React, { Fragment, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Section( { title, children, link, overflow = 'rows' } ) {
    const [ scroll, setScroll ] = useState(0)
    
    function handleScrolling( direction ) {
        const delta = 200 * direction;
        const maxScroll = (children.length * 200)
        let endResult = scroll + delta;
        if ( endResult < 0 ) {
            endResult = endResult + maxScroll
        } else if ( endResult === maxScroll ) {
            endResult = 0;
        }
        console.log(endResult)
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
            <div className={'flex w-screen'}>
                {overflow === 'scroll' ?
                    <button
                        className={'section-button btn-secondary'}
                        onClick={() => handleScrolling(-1)}
                    >
                        <FontAwesomeIcon icon={'chevron-left'} />
                    </button> : <Fragment />
                }
                <div className={'py-2 section-type-' + overflow}>
                    <div
                        style={{ transform : 'translate(-'+scroll+'px, 0)', transition: '0.5s' }}
                        className={'flex w-auto'}
                    >
                        {children}
                    </div>
                </div>
                {overflow === 'scroll' ?
                    <button
                        className={'section-button btn-secondary'}
                        onClick={() => handleScrolling(1)}
                    >
                        <FontAwesomeIcon icon={'chevron-right'} />
                    </button> : <Fragment />
                }
            </div>
        </div>
    );
}
