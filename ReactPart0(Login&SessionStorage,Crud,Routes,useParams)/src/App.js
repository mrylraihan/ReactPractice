import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import MainHeader from './components/MainHeader/MainHeader';
import axios from 'axios';
import MainPage from './components/Pages/MainPage';
import SeeAll from './components/Pages/SeeAll'
import SingleItem from './components/Pages/SingleItem';
import CreateEvent from './components/Pages/CreateEvent';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({})

  useEffect(()=>{
    const storedUserLoggedInFormation = localStorage.getItem('isLoggedIn');
    if(storedUserLoggedInFormation ==='1'){
      setIsLoggedIn(true)
      console.log(user);
    } 
  }, [user])
  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    axios.post('http://localhost:4000/sign-in',{
      credentials: {
        email: email,
        password: password
      }
    })
    .then(result=>result.data)
    .then(data=>{
      setUser(data.user)
      localStorage.setItem('isLoggedIn', '1');
      localStorage.setItem('token', `${data.user.token}`);
      setIsLoggedIn(true)
    })
    .catch(err=>console.log(err))
  };

  const logoutHandler = (nav) => {
    axios.delete('http://localhost:4000/sign-out', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(result => result.data)
      .then(data => {
        console.log(data);
        setUser({})
        localStorage.clear()
        setIsLoggedIn(false)
        nav()
      })
      .catch(err => console.log(err))
    localStorage.clear()
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <Router>

      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} user={user}/>
      <main>
        <Routes>
            <Route path='/' element={<MainPage isLoggedIn={isLoggedIn} onLogin={loginHandler} onLogout={logoutHandler} user={user} setUser={setUser} />}/>
            <Route path='/:id' element={<SingleItem/>}/>
            <Route path='/seeAll' element={<SeeAll user={user} />}/>
            <Route path='/create' element={<CreateEvent user={user} />}/>
       
        </Routes>
      </main>
      </Router>
    </React.Fragment>
  );
}

export default App;
