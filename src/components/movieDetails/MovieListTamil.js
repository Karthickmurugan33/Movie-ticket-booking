import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav';
// import style from "./style/faf.module.css";
import style from "../style/faf.module.css"



const MovieListTamil = (props) => {
    console.log(props.Year);
    return (
        <div >
            <Nav />
            {props.movies?.map((movie, index) => (
                <div className={`${style.movie}`}>
                    <img src={movie.Poster} width='30px' alt='movie'  ></img>
                    <p>{movie.Title}-{movie.Year}</p>
                    <Link to={"/book"} >   <button className="book">
                        BOOK
                    </button></Link>
                </div>
            ))}
        </div>
    );
};

export default MovieListTamil;