import React, { useState, useEffect } from 'react';

import './Tendencies.css';

import MovieTendencyComponent from '../components/MovieTendencyComponent/MovieTendencyComponent';
import TitleComponent from '../components/TitleComponent/TitleComponent';
import HeaderComponent from '../components/HeaderComponent/HeaderComponent';

function Tendencies() {
    const [movies, setMovies] = useState<string[]>([]);
    
    useEffect(() => {
        setMovies(['a']);
    }, []);

    return (
        <div className="background">
            <HeaderComponent />
            <TitleComponent title="Tendências"/>

            <ul className="movieGrid">
                {
                    movies.map(movie =>
                        <li key={movie.valueOf()}>
                            <MovieTendencyComponent />
                        </li>
                    )
                }
            </ul>
            
        </div>
    );
}

export default Tendencies;
