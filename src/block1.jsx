import React from 'react';

export const Block1 = (props) => {
    return (
        <div className='block1'>
            <h2>{props.title}</h2>
            {props.children}
        </div>
    );

}