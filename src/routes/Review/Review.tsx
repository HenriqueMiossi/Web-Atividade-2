import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getMovieName } from '../getHomeList';

import './Review.css';

import TitleComponent from '../components/TitleComponent/TitleComponent';
import HeaderComponent from '../components/HeaderComponent/HeaderComponent';
import NewReviewComponent from '../components/NewReviewComponent/NewReviewComponent';

function Review() {
    const movieId = useParams<{ id: string }>().id.substring(1);
    const [movieName, setMovieName] = useState('');

    const getName = async () => {
        const name = await getMovieName(movieId);
        setMovieName(name.original_title);
    }

    useEffect(()=> {
        getName();
    });

    return (
        <div className="background">
            <HeaderComponent />
            <TitleComponent title={`Reviews - ${movieName}`} />

            <NewReviewComponent movieId={movieId} />
        </div>
    );
}

export default Review;
