import React from 'react';

import './Movies.css';

import MovieTendencyComponent from '../components/MovieTendencyComponent/MovieTendencyComponent';
import TitleComponent from '../components/TitleComponent/TitleComponent';
import HeaderComponent from '../components/HeaderComponent/HeaderComponent';

function Movies() {
    return (
        <div className="background">
            <HeaderComponent />
            <TitleComponent title="Filmes"/>
        </div>
    );
}

export default Movies;
