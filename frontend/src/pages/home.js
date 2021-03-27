import React from 'react';
import axios from '@src/spring-axios.config';
import Title from '@components/title';
import Navbar from '@components/navbar';
import FancyButton from '@components/fancyButton';

function Home() {

  console.log(process.env.BACKEND_USER_USERNAME);
  React.useEffect(() => {
    axios.get('/pets')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, []);

  return (
    <div>
      <Title />
      <Navbar page={'home'} />
      <div className="container py-3">
        <div className="row">
          <div className="col">
            <h3>Welcome to PETSHARK!</h3>
            <p>Head out to the <a href="/inputs">inputs</a> page to test our Movie Rating Tool.</p>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Home;
