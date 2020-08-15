import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Search() {
  const [focus, setFocus] = useState(false);

  return (
    <div className='h-10 md:w-2/5 mx-2 flex border border-secondary-300 rounded'>
      <input
        placeholder='Buscar'
        className='pl-2 py-1 w-32 md:w-full text-lg text-secondary-500'
        onFocus={() => setFocus(!focus)}
      />

      <button
        type='submit'
        className='h-full w-10 md:w-12 bg-primary-500  text-white rounded-r'
      >
        <FontAwesomeIcon icon={'search'} />
      </button>
    </div>
  );
}
