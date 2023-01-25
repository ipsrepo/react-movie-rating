import React, {useContext, useRef, useState} from 'react';
import '../index.css'
import YearGenerator from './utilities/yearGenerator';
import RatingInput from './utilities/ratingInput';
import {DataContext} from '../context/dataContext';

const MovieForm = () => {

    const movieCtx = useContext(DataContext);

    const nameRef = useRef();
    const yearRef = useRef();
    const [rating, setRating] = useState(0);
    const [isNameValid, setNameValid] = useState(true);

    function handleRatingChange(rate) {
        setRating(rate)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const movieData = {
            movieRating: rating,
            movieName: nameRef.current.value,
            movieYear: yearRef.current.value,
        }
        setNameValid(!!nameRef.current.value);
        console.log(movieData);
        !!nameRef.current.value && movieCtx.addMovie(movieData)
    }

    return (
        <div className='h-full w-full my-8'>
            <div
                className="block p-6 rounded-lg drop-shadow-white bg-white mb-4 flex flex-col max-w-[400px] mx-auto">

                <h2 className='text-xl font-bold'>Fill the details :</h2>
                <form className='w-full'>
                    <div className='input-group'>
                        <p className='input-label'>Movie Name</p>
                        <input ref={nameRef} type="text" onInput={e => setNameValid(!!e.target.value)}
                               className={`input-controller ${!isNameValid ? 'input-error' : ''}`}/>
                        {!isNameValid && <p className='text-error text-sm font-bold'>Please enter movie name</p>}
                    </div>
                    <div className='input-group'>
                        <p className='input-label'>Year of Release</p>
                        <YearGenerator ref={yearRef}/>
                    </div>
                    <div className='input-group'>
                        <p className='input-label'>Rating</p>
                        <RatingInput maxStars={5} onChange={handleRatingChange}/>
                    </div>
                    <button className='text-md w-full float-right mt-16 mb-4 py-2 px-8 bg-primary text-white'
                            onClick={submitHandler}>Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
export default MovieForm;
