import React from 'react';

function Operator() {

    let x = 1;

    console.log(x++);
    return (
        <div>
            <p>{x++}{x+2}{++x}</p>
        </div>
    );
}

export default Operator;