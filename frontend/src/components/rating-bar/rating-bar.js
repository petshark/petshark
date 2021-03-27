import React from 'react';
import StarBar from "@components/rating-bar/star-bar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from "react-router";
import { inputsPath } from "@pages/workflow/inputs";
import { resultsPath } from "@pages/workflow/results";
import { Link } from "react-router-dom";

function RatingBar({ children }) {
    const location = useLocation();

    console.log(location)

    return (
        <main className="h-100">
            <div>
                {children}
            </div>
            <nav className="navbar fixed-bottom navbar-dark bg-light">
                <div className="container-fluid">
                    <div className="w-100 d-flex flex-row align-items-center justify-content-between">
                        <div className="col-sm d-flex flex-row justify-content-start">
                            <BackToForm currentLocation={location} />
                        </div>
                        <div className="col-sm d-flex flex-row justify-content-center">
                            <StarBar
                                score={children.props.prediction.Probability && Math.ceil(children.props.prediction.Probability.reduce((a, b) => a + b) / children.props.prediction.Probability.length)}
                                maxScore={10}
                                starStyle={{ width: '3rem', height: '3rem' }}
                                starClassName="text-warning" // yellow stars
                            />
                        </div>
                        <div className="col-sm d-flex flex-row justify-content-end">
                            <GoToResults currentLocation={location} />
                        </div>
                    </div>
                </div>
            </nav>
        </main>
    );
}

const BackToForm = ({ currentLocation }) => {
    if (!currentLocation.pathname.startsWith(resultsPath)) {
        return null;
    }

    return (
        <div>
            <Link to={inputsPath} className="btn btn-primary">
                <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                <span>Back to form</span>
            </Link>
        </div>
    );
}

const GoToResults = ({ currentLocation }) => {
    if (!currentLocation.pathname.startsWith(inputsPath)) {
        return null;
    }

    return (
        <div>
            <Link to={resultsPath} className="btn btn-primary">
                <span>Explore insights</span>
                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </Link>
        </div>
    );
}

export default RatingBar;
