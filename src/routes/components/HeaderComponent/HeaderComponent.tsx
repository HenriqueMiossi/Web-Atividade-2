import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import './HeaderComponent.css';
import logo from '../../Assets/reviewer-logo.png';

function HeaderComponent() {
    const history = useHistory();

    let matchTendencies = useRouteMatch('/');
    let matchMovies = useRouteMatch('/movies');
    let matchLogin = useRouteMatch('/login');
    
    return (
        <div className="headerContainer">
            <img 
                src={logo}
                alt=""
                className="logo"
            />

            <div className="buttonContainer">
                <button className={`${matchTendencies?.isExact ? "button-selected" : "button"} button-left`} onClick={() => { history.push('/') }}>
                    Tendências
                </button>
                <button className={`${matchMovies?.isExact ? "button-selected" : "button"} button-center`} onClick={() => { history.push('/movies') }}>
                    Filmes
                </button>
                <button className={`${matchLogin?.isExact ? "button-selected" : "button"} button-right`} onClick={() => { history.push('/movies') }}>
                    Login
                </button>
            </div>
        </div>
    );
}

export default HeaderComponent;
