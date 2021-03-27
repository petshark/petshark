import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// all scss files are imported thorugh the main.scss
// no other css/scss import has to be done anywhere else
import "@styles/main.scss";

import Home from '@pages/home';
import Model from '@pages/model';
import Result from '@pages/result';
import About from '@pages/about';

ReactDOM.render(
    <Router basename={process.env.ROUTER_BASENAME}>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/model">
            <Model />
        </Route>
        <Route path="/result">
            <Result />
        </Route>
        <Route path="/about">
            <About />
        </Route>
    </Router>,
    document.getElementById('root')
);
