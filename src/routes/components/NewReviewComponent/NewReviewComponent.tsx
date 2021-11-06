import React, { useState } from 'react';

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
            <button className="sendButton" onClick={() => console.log({"review": text, "movieId": props.movieId})}>
                Enviar Review
            </button>
        </>
    );
}

export default NewReviewComponent;
