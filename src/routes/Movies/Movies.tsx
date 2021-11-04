import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './Movies.css';

import TitleComponent from '../components/TitleComponent/TitleComponent';
import HeaderComponent from '../components/HeaderComponent/HeaderComponent';
import MovieComponent from '../components/MovieComponent/MovieComponent';

function Movies() {
    const [movies, setMovies] = useState<string[]>([]);
    const history = useHistory();
    
    useEffect(() => {
        setMovies(['a', 'b', 'c']);
    }, []);
    
    return (
        <div className="background">
            <HeaderComponent />
            <TitleComponent title="Filmes"/>

            <ul className="movieGrid">
                {
                    movies.map(movie =>
                        <li key={movie.valueOf()} onClick={() => history.push(`/review:${movie.valueOf()}`)}>
                            <MovieComponent />
                        </li>
                    )
                }
            </ul>

        </div>
    );
}

export default Movies;
