import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import AddPerson from './components/AddPerson';
import Home from './components/Home';
import Nav from './components/Nav';
import SeeAll from './components/SeeAll';
import SeeSingle from './components/SeeSingle';

const DUMMYDATA = [
  {name:'Wallie', id:0},
  {name:'Heshow', id:1},
  {name:'Stazz', id:2},
]
function App() {
  const [peopleList, setPeopleList] = useState(DUMMYDATA)
  return (
    <Router>
    <div className="app">
      <h1>Hi there!</h1>
      <Nav></Nav>
    </div>
    <Routes>
        <Route path={`/`} element={<Home />}/>
        <Route path={`/seeAll`} element={<SeeAll list={peopleList}/>}/>
        <Route path={`/seeAll/:id`} element={<SeeSingle list={peopleList}/>}/>
        <Route path={`/addPerson`} element={<AddPerson setData={setPeopleList}/>}/>
    </Routes>
    </Router>
  );
}

export default App;
