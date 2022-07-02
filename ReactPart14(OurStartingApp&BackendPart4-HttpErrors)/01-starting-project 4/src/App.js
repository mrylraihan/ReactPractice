import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movieList, setMovieList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
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
  async function fetchMoviesHandler(){
    setIsLoading(true)
    setError(null)
    try{
      const res = await fetch('https://swapi.dev/api/film/') // with errors 
      // const res = await fetch('https://swapi.dev/api/films/') no errors
      if (!res.ok) {
        throw new Error('Something went wrong')
      }
      const result = await res.json()
      
      const transformedMovies = result.results.map(movieData => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date
        }
      })
      setMovieList(transformedMovies)
      // setIsLoading(false)//this wont stop loading if it errors
    }catch(error){
      console.log(error);
      setError(error.message)
    }
    setIsLoading(false)//so regardless if its a good or bad request it will stop loading 
  
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={movieList.length>0?setMovieList.bind(this,[]):fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading&& movieList.length> 0 &&<MoviesList movies={movieList} />}
        {!isLoading && !error && movieList.length === 0 &&<p>Sorry no movies found!</p>}
        {isLoading&& <p>Loading...</p>}
        {!isLoading && error && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
