import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function InputField( { password, id, name, value, onChange } ) {
    const [ isVisible, setVisible ] = useState(false)
    
    return (
        <div style={{ display : 'flex', alignItems : 'center' }}>
            <input
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                type={password && !isVisible ? 'password' : 'text'}
            />
            
            {password ? (
                <div className={'icon'} onClick={() => setVisible(!isVisible)}>
                    <FontAwesomeIcon className={'icon'} icon={'eye'+(!isVisible?'-slash':'')} />
                </div>
            ) : <> </>}
        </div>
    );
}
