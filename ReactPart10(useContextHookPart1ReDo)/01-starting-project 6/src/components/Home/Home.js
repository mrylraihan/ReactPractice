import React, {useContext} from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';
import Button from '../UI/Button/Button'
import AuthContext from '../../store/auth-context';


const Home = () => {
  // here we really shouldn't use context because we are directly using the props its not chaining to another component, same the login this is just for practice with context 
  const ctx = useContext(AuthContext)
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
    <Button onClick={ctx.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
