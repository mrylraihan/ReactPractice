import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import CreateTask from './components/CreateTask';
import EditTask from './components/EditTask';
import HomePage from './components/HomePage';
import SeeAll from './components/SeeAll';
import SingleTask from './components/SingleTask';


function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          {/* <Link to='/allTask'><li>See All Task</li></Link>
          <Link to='/createTask'><li>create a task</li></Link>
          <Link to='/oneTask'><li>see one by id</li></Link> */}
          <Route path='/' element={<HomePage />} />
          <Route path='/allTask' element={<SeeAll />} />
          <Route path='/allTask/:id' element={<SingleTask />} />
          <Route path='/createTask' element={<CreateTask />} />
          <Route path='/editTask/:id' element={<EditTask />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
