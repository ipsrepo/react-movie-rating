import React, {useEffect, useState} from 'react';
import {EmptyStar, FullStar} from '../../icons';

const RatingInput = ({maxStars = 5, onChange}) => {
    const [rating, setRating] = useState(0);
    const [starsEle, setStarsEle] = useState();

    const handleClick = (newRating) => {
        setRating(newRating);
        onChange(newRating);
    }

    useEffect(() => {
        const startElement = Array.from({length: maxStars}, (_, i) => i + 1).map(star => (
            <span className='h-5 w-5 cursor-pointer text-primary mr-2' key={star} onClick={() => handleClick(star)}>
                        {rating >= star ? <FullStar className='fill-primary'/> : <EmptyStar className='fill-light'/>}
                </span>
        ));
        setStarsEle(startElement)

    }, [rating]);


    return (
        <div className="flex">
            {starsEle}
        </div>
    );
}

export default RatingInput;
