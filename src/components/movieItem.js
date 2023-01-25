import React from 'react';
import {EmptyStar, FullStar} from '../icons';


const MovieItem = ({movie}) => {
    const movieRoundRating = Math.round(movie.movieRating);

    const rating = Array.from({length: 5}, (_, i) => i + 1).map(star => (
        <span className='h-5 w-5 cursor-pointer text-primary mr-2' key={star}>
                        {movieRoundRating >= star ? <FullStar className='fill-primary'/> :
                            <EmptyStar className='fill-light'/>}
                </span>
    ));
    return (
        <div
            className="block p-6 rounded-lg drop-shadow-white bg-white my-4 flex flex-row justify-between items-center max-w-[600px]">
            <div>
                <h3 className='text-md font-bold text-primary'>{movie.movieName}</h3>
                <p className='mt-1 text-base font-bold'>{movie.movieYear}</p>
            </div>

            <div className="flex">
                {rating}
            </div>
        </div>
    )
}
export default MovieItem;
