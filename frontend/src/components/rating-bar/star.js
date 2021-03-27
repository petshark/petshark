import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faStar as activeStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as inactiveStar } from '@fortawesome/free-regular-svg-icons';

function Star({active, style, className}) {
    const star = active ? activeStar : inactiveStar;

    return (
        <FontAwesomeIcon icon={star} style={style} className={className} />
    );
}

export default Star;
