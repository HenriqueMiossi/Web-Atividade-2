import React, { useState } from 'react';
import axios from 'axios';

import './NewReviewComponent.css';

function NewReviewComponent(props: {movieId: string}) {
    const [text, setText] = useState('');

    return (
        <>
            <div className="reviewContainer">
                <textarea
                    placeholder="Digite aqui..."
                    className="textInput"
                    onChange={reviewText => setText(reviewText.target.value)}
                ></textarea>
            </div>
            <button className="sendButton" onClick={() => {
                const data = {"review": text, "movieId": props.movieId};
                axios.post(`http://localhost:3333/movies/${props.movieId}`, data);
            }}>
                Enviar Review
            </button>
        </>
    );
}

export default NewReviewComponent;
