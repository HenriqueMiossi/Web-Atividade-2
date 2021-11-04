import React from 'react';
import { useParams } from "react-router-dom";

import './Review.css';

import TitleComponent from '../components/TitleComponent/TitleComponent';
import HeaderComponent from '../components/HeaderComponent/HeaderComponent';
import NewReviewComponent from '../components/NewReviewComponent/NewReviewComponent';

function Review() {
    const movieId = useParams<{ id : string }>().id.substring(1);

    return (
        <div className="background">
            <HeaderComponent />
            <TitleComponent title={ `Reviews - ${ movieId }` }/>

            <NewReviewComponent movieId={movieId}/>
        </div>
    );
}

export default Review;
