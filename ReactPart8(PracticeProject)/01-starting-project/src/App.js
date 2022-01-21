import React, { useState } from 'react';
import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList';

function App() {
const[usersList, setUserList] = useState([])

const addUserHandler = (uName, uAge)=>{
  setUserList(prevUser=>{
    return [...prevUser, { name: uName, age: uAge, id: Math.random().toString()}]
  })
}

const deleteUserHandler = (userId)=>{
  setUserList(prevUser=>{
    const newList = prevUser.filter(user=> user.id !== userId)
    return newList
  })
}

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList} onDelete={deleteUserHandler} />
    </div>
  );
}

export default App;
