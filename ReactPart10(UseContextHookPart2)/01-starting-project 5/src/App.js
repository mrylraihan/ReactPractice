import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(()=>{
    const storesUSerLoggedInInfo = localStorage.getItem('isLoggedIn')
    if (storesUSerLoggedInInfo === '1') {
      setIsLoggedIn('true')
      console.log(true);
    }else{
      console.log(false);
    }
  }, [])
  

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn', '1')
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn')
  };

  return (
    // now every Component wrapped will have access to the authContext
    // Provider is stating that any wrapped here will have access
    // <AuthContext.Provider value={{
    //   isLoggedIn: isLoggedIn,
    // }}>
    <>
      <MainHeader onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </>
      // </AuthContext.Provider>
     
  );
}

export default App;
