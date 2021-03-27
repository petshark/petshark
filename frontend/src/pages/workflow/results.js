import React from 'react';
import Title from '@components/title';
import Navbar from '@components/navbar';

const resultsPath = '/results'
export {
    resultsPath
}


function Results(props) {
    const makeList = (array) => {
        return array.map((element, index) => <li key={index}>{element}</li>)
    }

    return (
        <div className="result">
            <Title />
            <Navbar page={'result'} />
            <div className="container py-3">
                <fieldset disabled>
                    <div className="form-group row">
                        <label className="col-auto m-auto col-form-label">
                            <h2 className="m-0 text-muted">Movie Idea</h2>
                        </label>
                        <div className="col m-auto ">
                            <input type="text" className="form-control" placeholder="Movie title" value={props.title} onChange={(event) => props.setTitle(event.target.value)} />
                        </div>
                    </div>
                </fieldset>

                {/* <div className="row py-3">
                    <div className="col">
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ width: (props.prediction * 10) + '%' }} aria-valuenow={props.prediction} aria-valuemin="0" aria-valuemax="10"></div>
                        </div>
                    </div>
                </div> */}
                <div className="row">
                    <div className="col-auto">
                        <h6>Prediction categories:</h6>
                        <ul>
                            {props.prediction.Category && makeList(props.prediction.Category)}
                        </ul>
                    </div>
                    <div className="col-auto">
                        <h6>Probabilities for each category:</h6>
                        <ul>
                            {props.prediction.Category && makeList(props.prediction.Probability)}
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Results;
