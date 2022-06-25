import React, { useState } from 'react';

import './App.css';
import HomePage from './components/Pages/HomePage';
import LoginPage from './components/Pages/LoginPage';

function App() {
  const [user, setUser] = useState(null)

  console.log(user);
//come back to and complete
  return (
    <div className="app">
      <h1>Hi there!</h1>
      {!user && <LoginPage setUser={setUser}/>}
      {user && <HomePage user={user}/>}
    </div>
  );
}

export default App;
