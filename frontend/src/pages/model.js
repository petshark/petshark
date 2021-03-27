import React from 'react';
import Title from '@components/title';
import Navbar from '@components/navbar';

import stock1 from '@assets/stock1.jpeg';
import stock2 from '@assets/stock2.jpeg';
import stock3 from '@assets/stock3.jpeg';

function Model() {
  return (
    <div className="model">
      <Title />
      <Navbar page={'model'} />
      <div className="container py-3">

        <form>
          <div className="form-group row">
            <label className="col-auto m-auto col-form-label">
              <h2 className="m-0 text-muted">Movie Idea</h2>
            </label>
            <div className="col m-auto ">
              <input type="text" className="form-control" placeholder="Movie title" />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-4">
              <div className="form-group">
                <label>Genre</label>
                <select className="form-control" multiple>
                  <option>Action</option>
                  <option>Drama</option>
                  <option>Comedy</option>
                </select>
                <small className="form-text text-muted">Choose a movie genre from the list.</small>
              </div>
            </div>
            <div className="col-4">
              <div className="form-group">
                <label>Target duration (in minutes)</label>
                <input type="text" className="form-control" placeholder="Duration" />
                {/* <select className="form-control">
                  <option>less than 60 min</option>
                  <option>60-120 min</option>
                  <option>more than 120 min</option>
                </select> */}
              </div>
            </div>
            <div className="col-4">
              <div className="form-group">
                <label>Estimated budget (in $1000)</label>
                <input type="text" className="form-control" placeholder="Budget" />
                {/* <select className="form-control">
                  <option>$ 0-10K</option>
                  <option>$ 10K-1M</option>
                  <option>$ 1M+</option>
                </select> */}
              </div>
            </div>
          </div>
          <div className="form-group">
            <label>Director</label>
            <input type="text" className="form-control" placeholder="Director name" />
          </div>
          <div className="form-group">
            <label>Actors</label>
            <input type="text" className="form-control" placeholder="Actor Name; Actor Name; " />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea className="form-control" rows="3" placeholder="Movie description"></textarea>
          </div>
          <div className="form-group">
            <label>Upload related files here</label>
            <div className="row">
              <div className="col-6 m-auto">
                <div className="custom-file">
                  <input type="file" className="custom-file-input" />
                  <label className="custom-file-label">Choose file</label>
                </div>
              </div>
              <div className="col-6 m-auto">
                <p className="m-0"><a href="#">Script.txt</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="#">Picture.png</a></p>
              </div>
            </div>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>

        <div className="row py-3">
          <div className="col">
            <h4>Moodboard</h4>
          </div>
        </div>

        <div className="row py-3">
          <div className="col-4 img">
            <img src={stock1} />
          </div>
          <div className="col-4 img">
            <img src={stock2} />
          </div>
          <div className="col-4 img">
            <img src={stock3} />
          </div>
        </div>

      </div>
    </div >
  );
}

export default Model;
