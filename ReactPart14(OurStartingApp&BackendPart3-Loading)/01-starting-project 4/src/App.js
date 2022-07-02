import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movieList, setMovieList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
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
    try{
      const res = await fetch('https://swapi.dev/api/films/')
      const result = await res.json()
      console.log(result)
      const transformedMovies = result.results.map(movieData => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date
        }
      })
      setMovieList(transformedMovies)
      setIsLoading(false)
    }catch(error){
      console.log(error);
    }
    
  
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={movieList.length>0?setMovieList.bind(this,[]):fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading&& movieList.length> 0 &&<MoviesList movies={movieList} />}
        {!isLoading&& movieList.length === 0 &&<p>Sorry no movies found!</p>}
        {isLoading&& <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
