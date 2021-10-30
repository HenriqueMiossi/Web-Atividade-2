import React from 'react';
import './TitleComponent.css';

function TitleComponent(props: { title: string }) {
    return (
        <div>
            <header>
                <h1>{ props.title }</h1>
            </header>
        </div>
    );
}

export default TitleComponent;
