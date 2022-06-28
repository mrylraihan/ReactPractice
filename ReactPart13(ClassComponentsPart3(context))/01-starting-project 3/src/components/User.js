import { Component } from 'react';
import classes from './User.module.css';

class User extends Component{
  componentWillUnmount(){
    //when the componenet is removed this will run, 
    //you will see when we show and hide the elements
    //meaning will see it 3 times because we hide 3 elements 
    console.log('user will unmount');
  }
  render(){
    return(
      <li className={classes.user}>{this.props.name}</li>
    )
  }
}


// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
