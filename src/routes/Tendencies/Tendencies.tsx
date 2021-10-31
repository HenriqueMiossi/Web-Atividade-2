import React from 'react';

import './Tendencies.css';

import MovieTendencyComponent from '../components/MovieTendencyComponent/MovieTendencyComponent';
import TitleComponent from '../components/TitleComponent/TitleComponent';
import HeaderComponent from '../components/HeaderComponent/HeaderComponent';

function Tendencies() {
    return (
        <div className="background">
            <HeaderComponent />
            <TitleComponent title="Tendências"/>

            <div>
                <MovieTendencyComponent />
                <MovieTendencyComponent />
            </div>
            
        </div>
    );
}

export default Tendencies;
