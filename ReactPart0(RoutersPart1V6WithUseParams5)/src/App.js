import React, { useState } from 'react';
import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom';
import './App.css';
import AddTeacher from './components/AddTeacher';
import Navbar from './components/Navbar';
import ShowAll from './components/ShowAll';
import ShowOne from './components/ShowOne';

const teacherList = [
  { id: 1, name: 'Ms.Nancy' },
  { id: 2, name: 'Ms.Francis' },
  { id: 3, name: 'Mr.Frankford' },
  { id: 4, name: 'Ms.Brucy' },
  { id: 5, name: 'Ms.Manni' },
  { id: 6, name: 'Mr.Bulls' },
  { id: 7, name: 'Mr.Ryans' },
]
function App() {
  const [teacher, setTeacher] = useState(teacherList)

  return (
    <div>
      <Routers>
    <div className="app">
      <h1>Hi there!</h1>
      <Navbar/>
    </div>
      <Routes>
        <Route path='/' element={<ShowAll teacherList={teacher}/>}/>
        <Route path='/:id' element={<ShowOne teacherList={teacher} setTeacherList={setTeacher}/>}/>
          <Route path='/addTeacher' element={<AddTeacher setTeacher={setTeacher}teacherLength={teacher.length}/>} set/>
      </Routes>
    </Routers>
    </div>
  );
}

export default App;
