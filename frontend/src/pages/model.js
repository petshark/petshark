import React from 'react';
import Title from '@components/title';
import Navbar from '@components/navbar';

function Model() {
  return (
    <div className="model">
      <Title />
      <Navbar page={'model'} />
      <div className="container py-3">
        <div className="row">
          <div className="col">
            <h3>Prediction Model Input</h3>
          </div>
        </div>

        <p>Fill in the fields below to predict the movie success.</p>

        <form>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Runtime</label>
            <select className="form-control" id="exampleFormControlSelect1">
              <option>less than 60</option>
              <option>60-120</option>
              <option>more than 120</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Director</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input" />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Actors</label>
            <div className="actor">
              <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input" />
            </div>
            <div className="actor">
              <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input" />
            </div>
            <button className="btn btn-primary">+ Add actor</button>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Description</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
        </form>
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

export default Model;
