import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function CheckBox({ text }) {
  const [isPressed, setPressed] = useState(false);
  return (
    <div className='check-box' onClick={() => setPressed(!isPressed)}>
      <FontAwesomeIcon
        className={'icon ml-1' + (isPressed ? 'pressed' : '')}
        icon={(isPressed ? 'check-' : '') + 'square'}
        color='#007bff'
      />
      <span className='text-base tracking-tight text-label ml-2'>{text}</span>
    </div>
  );
}

export function InputField({ id, name, value, onChange, type = 'text' }) {
  // const [isVisible, setVisible] = useState(false);

  return (
    <div className=''>
      <input
        className='form-input'
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        type={type} /* password && !isVisible ? 'password' : 'text' */
      />

      {/* {password ? (
        <div className={'icon'} onClick={() => setVisible(!isVisible)}>
          <FontAwesomeIcon
            className={'icon'}
            icon={'eye' + (!isVisible ? '-slash' : '')}
          />
        </div>
      ) : (
        <> </>
      )} */}
    </div>
  );
}

export function LikeButton() {
  const [isLiked, setLiked] = useState(false);

  return (
    <div
      className={
        'h-10 w-10 p-1 mr-2 mt-2 z-10 rounded-full bg-secondary-100 shadow-md flex justify-center items-center duration-200 cursor-pointer'
      }
      onClick={() => setLiked(!isLiked)}
    >
      {isLiked ? (
        <FontAwesomeIcon
          className={'h-12 w-12 text-primary-500 duration-200 scale-150'}
          icon={'heart'}
        />
      ) : (
        <FontAwesomeIcon
          className={'h-12 w-12 text-primary-400'}
          icon={['far', 'heart']}
        />
      )}
    </div>
  );
}

export function Label({ forHtml, label, styles = '' }) {
  return (
    <label
      htmlFor={forHtml}
      className={'w-full text-base tracking-tight text-label ' + styles}
    >
      {label}
    </label>
  );
}
