import React from 'react';

const base ={
    padding: "10px 30px 30px",
}

export const Base = (props) => {
    return (
        <div style={base}>
            <h1>{props.title}</h1>
            {props.children}
        </div>
    );
    
}