import React from 'react';

const block3 ={
    margin: "0px 0px 10px",
}
const inblock3={
    margin: "0px 20px",
}

export const Block3 = (props) => {
    return (
        <div style={block3}>
            <h4>{props.title}</h4>
            <div style={inblock3}>
            {props.children}
            </div>
        </div>
    );

}