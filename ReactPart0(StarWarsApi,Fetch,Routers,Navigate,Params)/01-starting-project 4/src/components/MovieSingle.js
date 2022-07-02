import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import classes from './MovieSingle.module.css';

const MovieSingle = (props) => {
  const nav = useNavigate()
  const params = useParams()
  const id = params.id
  const movie = props.movies.filter(ele=>{
    return ele.id == id
  })[0]

  return (
    <li className={classes.movie}>
      <h2>{movie.title}</h2>
      <h3>{movie.releaseDate}</h3>
      <p>{movie.openingText}</p>
      <button onClick={()=>nav(-1)}>go back to list</button>
    </li>
  );
};

export default MovieSingle;
