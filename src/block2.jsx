import React from 'react';

const block2={
    margin: "10px 20px 10px",
}

const inblock2={
    margin: "0px 20px",
}

export const Block2 = (props) => {
    return (
        <div style={block2}>
            <h3>{props.title}</h3>
            <div className={inblock2}>
            {props.children}
            </div>
        </div>
    );

}