import React from 'react';

const block1={
    margin:"10px 1rem 0px",
}

const inblock1 = {
    margin: "5px 1rem",
}

export const Block1 = (props) => {
    return (
        <div style={block1}>
            <h2>{props.title}</h2>
            <div style={inblock1}>
            {props.children}
            </div>
        </div>
    );

}