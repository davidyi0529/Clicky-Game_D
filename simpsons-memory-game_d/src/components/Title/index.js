import React from 'react';
import './style.css';

const Title = props => (
  <div className="title">
    <h1><img className='simpsons' src='https://github.com/davidyi0529/Simpsons-Memory-Game_D/blob/main/simpsons-memory-game_d/public/img/simpsonslogo.png?raw=true' alt='Simpsons'/></h1>
    Score: <span className="score">{props.correctGuesses} &nbsp; &nbsp;| &nbsp; &nbsp;</span>
    Top Score: <span className="score">{props.bestScore}</span>
  </div>
);

export default Title;