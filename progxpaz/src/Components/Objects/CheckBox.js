import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function CheckBox( { text } ) {
    const [ isPressed, setPressed ] = useState(false);
    
    return (
        <div className={'check-box'} onClick={() => setPressed(!isPressed)}>
            <FontAwesomeIcon
                className={'icon'+(isPressed? ' pressed':'')}
                icon={(isPressed?'check-':'')+'square'}
            />
            <span className={'text'}>{text}</span>
        </div>
    );
}

