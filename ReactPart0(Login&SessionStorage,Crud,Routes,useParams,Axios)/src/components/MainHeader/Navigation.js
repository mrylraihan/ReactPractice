import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import classes from './Navigation.module.css';

const Navigation = (props) => {
  const nav = useNavigate()
  const navMeHome = ()=>{
    nav('/')
  }
  return (
    <nav className={classes.nav}>
      <ul>
        {props.isLoggedIn && (
          <li>
            <Link to="/user">{props.user.email}</Link>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <Link to="/">Home</Link>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <Link to="/seeAll">See All Events</Link>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <Link to="/create">create a task</Link>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <button onClick={props.onLogout.bind(this,navMeHome)}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
