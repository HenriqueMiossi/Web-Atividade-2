import React from 'react';

import './Tendencies.css';

import MovieTendencyComponent from '../components/MovieTendencyComponent/MovieTendencyComponent';
import TitleComponent from '../components/TitleComponent/TitleComponent';

function Tendencies() {
    return (
        <div id="paginaTendencies">
            <TitleComponent title="Tendências"/>

            <div>
                <MovieTendencyComponent />
                <MovieTendencyComponent />
            </div>
            
        </div>
    );
}

export default Tendencies;
