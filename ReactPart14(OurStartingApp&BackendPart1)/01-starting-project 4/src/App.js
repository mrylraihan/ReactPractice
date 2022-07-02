import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movieList, setMovieList] = useState([])
  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2',
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   },
  // ];
  function fetchMoviesHandler(){
    fetch('https://swapi.dev/api/films/')
    .then(res=>res.json())
      .then(result => { console.log(result)
        return result
      })
      .then(data=>{
        const transformedMovies = data.results.map(movieData=>{
          return {
            id: movieData.episode_id, 
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate:movieData.release_date
          }
        })
        return setMovieList(data.results)
      })
      .catch(console.error)
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movieList} />
      </section>
    </React.Fragment>
  );
}

export default App;
