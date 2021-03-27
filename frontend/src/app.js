import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// all scss files are imported thorugh the main.scss
// no other css/scss import has to be done anywhere else
import "@styles/main.scss";

import Home from '@pages/home';
import About from '@pages/about';
import RatingBar from "@components/rating-bar/rating-bar";
import Inputs, { inputsPath } from "@pages/workflow/inputs";
import Results, { resultsPath } from "@pages/workflow/results";

function App() {
    const [prediction, setPrediction] = React.useState(1);

    return (
        <Router basename={process.env.ROUTER_BASENAME}>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path={inputsPath}>
                <RatingBar prediction={prediction} >
                    <Inputs prediction={prediction} setPrediction={setPrediction} />
                </RatingBar>
            </Route>
            <Route path={resultsPath}>
                <RatingBar prediction={prediction} >
                    <Results prediction={prediction} />
                </RatingBar>
            </Route>
        </Router>
    );
}

export default App;
