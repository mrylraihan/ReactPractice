import React, { useEffect, useState } from 'react';

import './App.css';
import AddOne from './components/AddOne';
// import DeleteOne from './components/DeleteOne';
import ShowAll from './components/ShowAll';
// import ShowOne from './components/ShowOne';


function App() {
  const [postList, setPostList] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(setPostList)
    .catch(console.error)
  },[])
  return (
    <>
    <div className="app">
      <h1>Hi there!</h1>
    </div>
    {/* <ShowOne/> */}
    <div>
      <AddOne list={postList} setList={setPostList} />
    {/* <DeleteOne/> */}
    </div>
      <ShowAll list={postList}/>
    </>
  );
}

export default App;
