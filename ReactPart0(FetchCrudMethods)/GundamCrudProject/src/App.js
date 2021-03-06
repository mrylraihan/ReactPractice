import React from 'react';

import './App.css';
import FetchAll from './components/FetchAll';
import FetchById from './components/FetchById';
import FetchCreateOne from './components/FetchCreateOne';
import FetchDelete from './components/FetchDelete';
import FetchFirstRoute from './components/FetchFirstRoute';
import FetchPatch from './components/FetchPatch';
import FetchPut from './components/FetchPut';

function App() {
  return (
    <>
    <div className="app">
      <h1>hitting our first / route</h1>
      <FetchFirstRoute/>
    </div>
      <div className="app">
        <h1>See all Gundams!</h1>
        <FetchAll />
    </div>
      <div className="app">
        <h1>Get a Single Gundam</h1>
        <FetchById />
    </div>
      <div className="app">
        <h1>Create a Pilot and Gundam!</h1>
        <FetchCreateOne />
    </div>
      <div className="app">
        <h1>Delete one Gundamby id!</h1>
        <FetchDelete />
    </div>
      <div className="app">
        <h1>Patch one Gundamby id!</h1>
        <FetchPatch />
    </div>
      <div className="app">
        <h1>Edit one Gundamby id!</h1>
        <FetchPut />
    </div>

    </>
  );
}

export default App;
