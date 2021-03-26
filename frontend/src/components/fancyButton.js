import React from 'react';

function FancyButton(props) {
    console.log(props);
    return (
        <button className="btn btn-danger">
            {props.text}
        </button>
    )
}

export default FancyButton;
