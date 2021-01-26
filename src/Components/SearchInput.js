import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from "react-router-dom";

export function SearchInput() {
    const [ focus, setFocus ] = useState(false);
    const [ searchText, setSearchText ] = useState('');
    let history = useHistory();
    
    function handleEnterKey(e) {
        if (e.keyCode === 13) {
            history.push('/search/' + searchText)
        }
    }
    
    return (
        <div className={'h-10 md:w-2/5 mx-2 flex border border-secondary-300 rounded'}>
            <input
                placeholder='Buscar'
                className={'pl-2 py-1 w-32 md:w-full text-lg text-secondary-500'}
                onFocus={() => setFocus(!focus)}
                onChange={( e ) => setSearchText(e.target.value)}
                onKeyDown={handleEnterKey}
            />
            
            <button
                type='submit'
                className={'h-full w-10 md:w-12 bg-primary-500  text-white rounded-r'}
                onClick={() => history.push('/search/' + searchText)}
            >
                <FontAwesomeIcon icon={'search'} />
            </button>
        </div>
    );
}
