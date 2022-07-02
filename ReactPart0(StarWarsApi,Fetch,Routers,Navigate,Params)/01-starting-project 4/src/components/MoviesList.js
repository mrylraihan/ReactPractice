import React from 'react';
import {Link} from 'react-router-dom'
import Movie from './Movie';
import classes from './MoviesList.module.css';

const MovieList = (props) => {
  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie) => (
        <Link to={`/${movie.id}`}>
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
          />
          </Link>

      ))}
    </ul>
  );
};

export default MovieList;
