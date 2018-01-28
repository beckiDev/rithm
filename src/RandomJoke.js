import React from 'react';
import './main.css';

const RandomJoke = (props) => {
  const joke = props.joke;
  console.log(joke);
  return(
    <div className="joke_container">
      { joke }
    </div>
  )
}

export default RandomJoke
