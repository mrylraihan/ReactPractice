import React, { useState } from 'react';

import './App.css';
import AddPerson from './components/AddPerson';
import ShowAll from './components/ShowAll';

const DummyData = [
  {id:1, name:"Wallie"},
  {id:2, name:"Heshow"},
  {id:3, name:"Meshia"},
]
function App() {
  const [list, setList] = useState(DummyData)

  const addPerson = (person)=>{
    setList(prev=>{
      return [...prev, person]
    })
  }
    const removePerson = (person)=>{
      setList(list.filter(ele=>ele.id !== person.id))
    }
  console.log(list);
  return (
    <>
    <div className="app">
      <h1>Hi there!</h1>
    </div>
      <ShowAll list={list} remove={removePerson}/>
      <AddPerson add={addPerson} list={list}/>
    </>
  );
}

export default App;
