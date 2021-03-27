import React from 'react';
import axios from 'axios';
import Title from '@components/title';
import Navbar from '@components/navbar';

import stock1 from '@assets/stock1.jpeg';
import stock2 from '@assets/stock2.jpeg';
import stock3 from '@assets/stock3.jpeg';

const inputsPath = '/inputs'
export {
  inputsPath
}

function Inputs() {
  const [title, setTitle] = React.useState("");
  const [director, setDirector] = React.useState("");
  const [actors, setActors] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [genres, setGenres] = React.useState([]);
  const [duration, setDuration] = React.useState("");
  const [budget, setBudget] = React.useState("");
  const data = {
    title: title,
    director: director,
    actors: actors,
    description: description,
    genres: genres,
    duration: duration,
    budget: budget
  }

  const submitData = () => {
    axios({
      method: 'post',
      url: 'http://localhost:7000/input',
      data: data
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

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
              <input type="text" className="form-control" placeholder="Movie title" value={title} onChange={(event) => setTitle(event.target.value)} />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-4">
              <div className="form-group">
                <label>Genre</label>
                <select className="form-control" multiple value={genres} onChange={(event) => setGenres(Array.from(event.target.selectedOptions, option => option.value))}>
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
                <input type="text" className="form-control" placeholder="Duration" value={duration} onChange={(event) => setDuration(event.target.value)} />
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
                <input type="text" className="form-control" placeholder="Budget" value={budget} onChange={(event) => setBudget(event.target.value)} />
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
            <input type="text" className="form-control" placeholder="Director name" value={director} onChange={(event) => setDirector(event.target.value)} />
          </div>
          <div className="form-group">
            <label>Actors</label>
            <input type="text" className="form-control" placeholder="Actor Name; Actor Name;" value={actors} onChange={(event) => setActors(event.target.value)} />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea className="form-control" rows="3" placeholder="Movie description" value={description} onChange={(event) => setDescription(event.target.value)} />
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
            <button type="button" className="btn btn-primary" onClick={() => console.log(data)}>Submit</button>
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

export default Inputs;
