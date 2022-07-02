import React, { useState } from 'react';
import './App.css';
import ShowQuote from './components/ShowQuote';


function App() {
const [quote, setQuote] = useState('')  
const [isLoading, setIsLoading] = useState(false)
const [error, setError] = useState(null)
// const getQuote= ()=>{
//   fetch('https://api.kanye.rest')
//   .then(res=>res.json())
//   .then(result=>result.quote)
//   .then(setQuote)
//   .catch(console.error)
// }

const getQuote= ()=>{
  setIsLoading(true)
  fetch('https://api.kanye.rest').then(res=>{
    // if(!res.ok){
    //   throw new Error('Something is wrong with your fetch!')//this wont work with this api because this api resturns an error message 
    // }
    return res.json()
  }).then(result=>result.quote)
    .then(result=>{
      setQuote(result)
      setIsLoading(false)
    })
    .catch((error)=>{
      setError(error.message)
      setIsLoading(false)
    })

}


let content = <p>...get a quote</p>
if(quote){
  content = <p>{quote}</p>
}
if(isLoading){
  content = <p>Loading...</p>
}
if(error){
  content = <p>{error}</p>
}
  return (
    <div className="app">
     <h1>Kanye West api</h1>
     <button onClick={quote?setQuote.bind(this, ''): getQuote}>press me!</button>
     {/* {isLoading && !error && <p>Loading ...</p>}
      {!isLoading && !error &&<ShowQuote quote={quote}/>}
      {!isLoading && <p>{error}</p>} */}
      {content}
    </div>
  );
}

export default App;
