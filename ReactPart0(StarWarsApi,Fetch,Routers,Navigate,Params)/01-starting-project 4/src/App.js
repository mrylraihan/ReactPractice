import React, { useState } from 'react';
import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom'
import MoviesList from './components/MoviesList';
import MoviesSingle from './components/MovieSingle'
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
        return setMovieList(transformedMovies)
      })
      .catch(console.error)
  }

  return (
    <React.Fragment>
      <Routers>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
      <Routes>
            <Route path={'/'} element={<MoviesList movies={movieList} />}/>
            <Route path={'/:id'} element={<MoviesSingle movies={movieList} />}/>
      </Routes>
      </section>
      </Routers>
    </React.Fragment>
  );
}

export default App;
