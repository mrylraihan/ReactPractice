import React, { useContext } from 'react';

import classes from './Navigation.module.css';
import AuthContext from '../../store/auth-context';

const Navigation = (props) => {
  const nCtx = useContext(AuthContext)
  return (
   <nav className={classes.nav}>
          <ul>
            <li>
              <button onClick={() => { console.log(nCtx.name) }}>test Context</button>
            </li>
            {nCtx.isLoggedIn && (
              <li>
                <a href="/">Users</a>
              </li>
            )}
            {nCtx.isLoggedIn && (
              <li>
                <a href="/">Admin</a>
              </li>
            )}
            {nCtx.isLoggedIn && (
              <li>
                <button onClick={props.onLogout}>Logout</button>
              </li>
            )}
          </ul>
        </nav>
  );
};

export default Navigation;
