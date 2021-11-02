import React from 'react';
import { useParams } from "react-router-dom";

import './Review.css';

import TitleComponent from '../components/TitleComponent/TitleComponent';
import HeaderComponent from '../components/HeaderComponent/HeaderComponent';

function Review() {
    const movieId = useParams<{ id : string }>().id.substring(1);

    return (
        <div className="background">
            <HeaderComponent />
            <TitleComponent title="Reviews"/>

            <h1>{ movieId }</h1>
        </div>
    );
}

export default Review;
