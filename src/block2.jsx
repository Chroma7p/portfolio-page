import React from 'react';

const block2={
    margin: "1rem 2rem 1rem",
}

const inblock2={
    margin: "5px 1rem",
}

export const Block2 = (props) => {
    return (
        <div style={block2}>
            <h3>{props.title}</h3>
            <div style={inblock2}>
            {props.children}
            </div>
        </div>
    );

}