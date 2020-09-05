import React, { useEffect } from 'react';
import CloseBtn from '../../Assets/images/close.svg';

export default function Modal(props) {
  const { message, toggle, close, children, footer } = props;

  useEffect(() => {
    if (toggle) {
      document.body.classList.add('overflow-hidden');
      toggle ?? (document.getElementById('overlay').scrollTop = 0);
    }
  });

  const handleClose = () => {
    document.body.classList.remove('overflow-hidden');
    close();
  };

  return (
    <div
      className={
        toggle
          ? 'fixed inset-0 z-20 flex justify-center items-center h-screen w-full bg-primary-500 bg-opacity-50 cursor-default'
          : 'hidden'
      }
      tabIndex='-1'
    >
      <div
        className=' w-11/12 sm:w-3/5 lg:w-2/5 bg-white p-3 rounded-lg shadow-xl'
        id='overlay'
        aria-hidden={!toggle}
      >
        <div className='relative'>
          <img
            src={CloseBtn}
            alt='Botón de cerrar'
            className='ml-auto w-6 h-6 cursor-pointer'
            onClick={handleClose}
          />
        </div>
        <div className='h-64 text-lg font-light text-secondary-500 p-2 overflow-y-auto'>
          {children ? children : message}
        </div>
        <>{footer}</>
      </div>
    </div>
  );
}
