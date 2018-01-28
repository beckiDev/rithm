import React from 'react';
import './main.css';

const List = (props) => {
  const jokes = props.jokes;
  const items = jokes.map((item) => <li>{item}</li>);

  return(
    <div className="List">  
    <p>{items}</p>
    </div>
  )
}

export default List
