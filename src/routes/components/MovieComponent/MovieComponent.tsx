import React from 'react';
import './MovieComponent.css';

function MovieComponent() {
    return (
        <div className="movieContainer">
            <img 
                src="https://s.aficionados.com.br/imagens/img-20210629-201036_cke.jpg" 
                alt=""
                className="movieThumbnail"
            />
            <h2 className="movieName">Bad Fallen melhor IGL</h2>
        </div>
    );
}

export default MovieComponent;
