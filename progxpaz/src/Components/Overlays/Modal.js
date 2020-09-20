import React, { useEffect } from 'react';
import CloseBtn from '../../Assets/images/close.svg';

export default function Modal(props) {
  const { message, toggle, close, children, footer, stylesBody } = props;

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
    <div className={toggle ? 'modal-overlay' : 'hidden'} tabIndex='-1'>
      <div className='' id='overlay-content' aria-hidden={!toggle}>
        <div className='relative'>
          <img
            src={CloseBtn}
            alt='Botón de cerrar'
            className='ml-auto w-6 h-6 cursor-pointer'
            onClick={handleClose}
          />
        </div>
        <div className={'modal-body ' + stylesBody}>
          {children ? children : message}
        </div>
        <>{footer}</>
      </div>
    </div>
  );
}
