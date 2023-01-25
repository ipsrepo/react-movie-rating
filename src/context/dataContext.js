import React, {useState} from 'react';
import {dummyData} from '../components/movieList';

export const DataContext = React.createContext({
    movieList: [],
    // deleteMovie: (index) => {
    // },
    addMovie: (data) => {
    },
    // updateMovie: (data, index) => {
    // },
})

export const DataContextProvider = (props) => {
    const [movies, setMovies] = useState(dummyData);

    const addMovieHandler = (movie) => {
        console.log('===================');
        console.log(movie);
        console.log('===================');
        setMovies(movies.concat(movie));
    }

    const contextValue ={
        movieList : movies,
        addMovie : addMovieHandler,
    };
    return (
        <DataContext.Provider value={contextValue}>{props.children}</DataContext.Provider>
    );

}
