import React, {useState, useEffect} from 'react';
import {Router} from '@reach/router';
import AllPlayers from './components/AllPlayers';
import NewPlayer from './components/NewPlayer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <AllPlayers path = "/players" />
        <NewPlayer path= "/players/new" />
      </Router>
    </div>
  );
}

export default App;
