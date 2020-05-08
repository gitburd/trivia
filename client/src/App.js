import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Game from './components/Game';
import GameState from './context/game/GameState';
import CorrectModal from './components/CorrectModal'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  return (
    
    <GameState>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Game}/>
          <Route exact path='#cModal' component={CorrectModal}/>
        </Switch>
      </BrowserRouter>
    </GameState>
  
  );
}

export default App;