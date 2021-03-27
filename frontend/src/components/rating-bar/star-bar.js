import React from 'react';
import Star from "@components/rating-bar/star";

function StarBar({score, maxScore, style, className, starStyle, starClassName}) {
    const stars = Array.from(
        Array(maxScore).keys()
    ).map((index) => {
        return (
            <Star
                key={index}
                active={index < score}
                style={starStyle}
                className={starClassName}
            />
        )
    })

    return (
        <div style={style} className={className}>
            {stars}
        </div>
    );
}

export default StarBar;
