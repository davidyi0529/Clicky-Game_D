import React from 'react';
import './style.css';

const Title = props => (
  <div className="title">
    <h1><img className='simpsons' src='/img/simpsonslogo.png' alt='Simpsons'/></h1>
    Score: <span className="score">{props.correctGuesses} &nbsp; &nbsp;| &nbsp; &nbsp;</span>
    Top Score: <span className="score">{props.bestScore}</span>
  </div>
);

export default Title;