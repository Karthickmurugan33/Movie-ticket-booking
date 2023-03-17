import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav';



const MovieList = (props) => {
    console.log(props.Year);
    return (
        <>
            <Nav />
            {props.movies?.map((movie, index) => (
                <div className='movie'>
                    <img src={movie.Poster} alt='movie'></img>
                    <p>{movie.Title}-{movie.Year}</p>
                    <Link to={"/book"} >   <button className="book">
                        BOOK
                    </button></Link>
                </div>
            ))}
        </>
    );
};

export default MovieList;