import React from 'react';

export const Base = (props) => {
    return (
        <div className='base'>
            <h1>{props.title}</h1>
            {props.children}
        </div>
    );
    
}