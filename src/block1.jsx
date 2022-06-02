import React from 'react';

const block1={
    margin:"10px 30px 0px",
}

export const Block1 = (props) => {
    return (
        <div style={block1}>
            <h2>{props.title}</h2>
            {props.children}
        </div>
    );

}