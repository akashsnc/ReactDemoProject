import React from 'react'
import ErrorBoundary from './ErrorBoundary';

function Hero({heroName}) {
    if(heroName === 'Joker')
        throw new Error('Not a Hero!');

  return (
    <h3>{heroName}</h3>
  )
}

export default Hero;