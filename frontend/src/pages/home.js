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
            <h3>HELLO</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Home;
