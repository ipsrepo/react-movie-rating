import React, {useContext} from 'react';
import MovieItem from './movieItem';
import {DataContext} from '../context/dataContext';

export const dummyData = [
    {
        movieName: 'The Shawshank Redemption',
        movieYear: 1994,
        movieRating: 4,
    },
    {
        movieName: 'The Godfather',
        movieYear: 1972,
        movieRating: 5,
    },
    {
        movieName: 'The Godfather: Part II',
        movieYear: 1974,
        movieRating: 3,
    },
    {
        movieName: 'The Dark Knight',
        movieYear: 2008,
        movieRating: 4,
    }
]
const MovieList = () => {
    const movieCtx =useContext(DataContext);
    console.log('===================');
    console.log( movieCtx.movieList);
    console.log('===================');
    const movieList = movieCtx.movieList.map((movie, index)=>{
        return <MovieItem key={index} movie={movie} />
    })

    return (
        <div className='h-full w-full min-w-max my-8 mx-auto'>
                <h2 className='text-xl font-bold'>Movie Details</h2>
                {movieList}
        </div>
    );

}
export default MovieList;
