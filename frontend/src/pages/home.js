import React from 'react';
import axios from '@src/axios.config';
import Title from '@components/title';
import Navbar from '@components/navbar';
import FancyButton from '@components/fancyButton';

function Home() {

  console.log(process.env.BACKEND_USER_USERNAME);
  React.useEffect(() => {
    axios.get('/example.json')
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
      <div>
        <h3>HELLO</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <FancyButton text="LALA" text2="222" />
      </div>
    </div>

  );
}

export default Home;
