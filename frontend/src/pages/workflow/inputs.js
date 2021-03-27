import React from 'react';

const inputsPath = '/inputs'
export {
    inputsPath
}

function Inputs() {
    const temp = (key) => (<p key={key}>inputs</p>);

    // TODO remove
    const elems = Array.from(Array(1000).keys()).map((i) => temp(i))

    return (
        <div>
            {elems}
        </div>
    );
}

export default Inputs;
