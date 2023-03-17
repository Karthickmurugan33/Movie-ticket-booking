
import React, { useState, useEffect } from 'react';
import MovieListTamil from "../movieDetails/MovieList"

const Tamil = () => {
    const [movies, setMovies] = useState([
        {
            Title: 'Kaithi',
            Year: '2021',
            imdbID: 'tt0076759',
            Type: 'movie',
            Poster:
                'https://th.bing.com/th/id/OIP.N3N98VrgLqzY5qmEd0iJjgHaHa?pid=ImgDet&w=300&h=300&rs=1 ',
        },
        {
            Title: 'Theeran Athigaram Ondru',
            Year: '2018',
            imdbID: 'tt0080684',
            Type: 'movie',
            Poster:
                'https://image.tmdb.org/t/p/w300_and_h450_bestv2/ssYIBfoEj3eX46ARQNaJZP8qpxL.jpg',
        },
        {
            Title: 'Vikram',
            Year: '2021',
            imdbID: 'tt0086190',
            Type: 'movie',
            Poster:
                'https://th.bing.com/th/id/OIP.V4anh5K-D5NTyImQEz_LBgHaNo?pid=ImgDet&w=300&h=300&rs=1',
        },
    ]);

    return (
        <div className='container-fluid movie-app'>
            <div className='row'>
                <MovieListTamil movies={movies} />
            </div>
        </div>
    );
};

export default Tamil