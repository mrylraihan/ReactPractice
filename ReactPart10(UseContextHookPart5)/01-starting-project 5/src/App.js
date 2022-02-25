import React, {useContext} from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';

function App() {
const ctx = useContext(AuthContext)
  return (
    // now every Component wrapped will have access to the authContext
    // Provider is stating that any wrapped here will have access
  <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login/>}
        {ctx.isLoggedIn && <Home/>}
      </main>
  </React.Fragment>

     
  );
}

export default App;
