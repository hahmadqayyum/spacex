import React from 'react';
import logo from './logo.svg';
import './App.css';
import LaunchContainer from './components/Launch';
import LaunchDetailsContainer from './components/LaunchDetails';

function App() {
  return (
    <div className="App">
      <div>
        <LaunchContainer />
        <LaunchDetailsContainer />
      </div>
    </div>
  );
}

export default App;




// https://spacexdata.herokuapp.com/graphql
// https://api.spacex.land/graphql/