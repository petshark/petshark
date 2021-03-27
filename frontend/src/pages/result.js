import React from 'react';
import Title from '@components/title';
import Navbar from '@components/navbar';

function Result() {
    return (
        <div className="result">
            <Title />
            <Navbar page={'result'} />
            <div className="container py-3">
                <div className="row">
                    <div className="col">
                        <h3>Prediction Model Output</h3>
                    </div>
                </div>

                <div className="row py-3">
                    <div className="col">
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h6>This movie has 70% chance of being a success (What is success?)</h6>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Result;
