import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './App.css';
import DependArray from './components/DependArray';
import EmptyArray from './components/EmptyArray';
import NoArray from './components/NoArray';


function App() {
  return (
    <Router>
    <div className="app">
      <h1>testing useEffect on routes</h1>
      <ul>
          <Link to={'/ED'}><li>Empty Dependency array</li></Link>
          <Link to={'/DA'}><li>With Dependency array</li></Link>
          <Link to={'/NA'}><li>No Dependency array</li></Link>
      </ul>
    </div>
      <Routes>
        <Route path={'/ED'} element={<EmptyArray/>}/>
        <Route path={'/DA'} element={<DependArray/>}/>
        <Route path={'/NA'} element={<NoArray/>}/>
      </Routes>
    </Router>
  );
}

export default App;
