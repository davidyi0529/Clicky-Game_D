import React from 'react';

import './style.css';

const Title = props => (
  <header className='header'>
    <div className='brand-logo'>Simpsons-Memory-Game_D</div>
    <div className='score-details'>
      <div>
        <strong>Score:</strong> {props.correctGuesses}
      </div>{' '}
      |{' '}
      <div>
        <strong>Top Score:</strong> {props.bestScore}{' '}
      </div>
    </div>
  </header>
);

export default Title;