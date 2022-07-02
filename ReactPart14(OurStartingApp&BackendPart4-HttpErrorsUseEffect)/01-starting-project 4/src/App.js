import React, { useState, useEffect } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movieList, setMovieList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  
  useEffect(()=>{
    fetchMoviesHandler()
  }, [])
  
  //if this was const fetchMoviesHandler = async ()=>{ // then the use effect must be after it but because its a regular function we are using hoisting
   
  async function fetchMoviesHandler(){
    setIsLoading(true)
    setError(null)
    try{
      const res = await fetch('https://swapi.dev/api/films/') // with errors 
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

  //this is a cleaner way to assign what needs to get rendered depending on what our state is
  //assigning the content to what ever is true and not rendering if anything is false 
  let content = <p>No movies Found ...</p>

  if (movieList.length > 0){
    content = <MoviesList movies={movieList} />
  }
  if(isLoading){
    content = <p>Loading...</p>
  }

  if(error){
    content = <p>{error}</p>
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={movieList.length>0?setMovieList.bind(this,[]):fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {/* this content will replace all those conditionals and checks because its getting assign above to what ever is true */}
        {content} 
        {/* {!isLoading && movieList.length > 0 && <MoviesList movies={movieList} />}
        {!isLoading && !error && movieList.length === 0 && <p>Sorry no movies found!</p>}
        {isLoading && <p>Loading...</p>}
        {!isLoading && error && <p>{error}</p>} */}
      </section>
    </React.Fragment>
  );
}

export default App;
