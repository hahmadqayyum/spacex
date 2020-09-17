import React, { useCallback } from 'react';
import { useState } from 'react';
import './App.css';
import LaunchContainer from './components/Launch';
import LaunchDetailsContainer from './components/LaunchDetails';

function App() {
  const [id, setId] = useState(1)

  const handleChange = useCallback((newid: any) => {
    setId(newid)
  }, [])


  return (
    <div className="App">
      <div>
        <LaunchContainer handleidChange={handleChange} />
        <LaunchDetailsContainer id={id} />
      </div>
    </div>
  );
}

export default App;




// https://spacexdata.herokuapp.com/graphql
// https://api.spacex.land/graphql/