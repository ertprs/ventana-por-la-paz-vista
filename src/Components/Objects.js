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

export function InputField({
  styles,
  id,
  name,
  value,
  onChange,
  placeholder,
  type = 'text',
}) {
  // const [isVisible, setVisible] = useState(false);

  return (
    <div className=''>
      <input
        className={'form-input ' + styles}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
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
        'h-10 w-10 p-1 mr-2 mt-2 rounded-full bg-secondary-100 shadow-md flex justify-center items-center duration-200 cursor-pointer'
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

export const Select = (props) => {
  const { name, value, children, onChange, ...rest } = props;

  return (
    <div className="relative">
      <select
        className="form-input appearance-none"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        {...rest}
      >
        {children}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-rose opacity-75">
        <svg
          className="fill-current h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
};