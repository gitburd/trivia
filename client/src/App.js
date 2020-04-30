import React from 'react';
import Game from './components/Game';
import GameState from './context/game/GameState';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  return (
    <GameState>
      <Game/>
    </GameState>
  );
}

export default App;