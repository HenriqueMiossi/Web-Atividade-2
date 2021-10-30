import React from 'react';
import { Route, BrowserRouter } from "react-router-dom";

import Tendencies from './routes/Tendencies/Tendencies';
import Movies from './routes/Movies/Movies';

function Reviewer() {
    return (
        <BrowserRouter>
            <Route component = { Tendencies } path = "/" exact />
            <Route component = { Movies } path = "/movies" exact />
        </BrowserRouter>
    );
}

export default Reviewer;
