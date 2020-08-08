import React from 'react';
import './styles/global.scss';
import SoundCloudApp from './views/SoundCloudApp'
import * as logo from './assets/logo.png'

function App() {
  return (
    <div className="App">
      <div className="logo flex">
        <img src={logo} alt="logo" />
        <h1>Sound<span>App</span></h1>
      </div>
      <SoundCloudApp />
    </div>
  );
}

export default App;
