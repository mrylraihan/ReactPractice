import React, { useState } from 'react';
import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList';

function App() {
const[usersList, setUserList] = useState([])

const addQuoteHandler = (uQuote)=>{
  setUserList(prevUser=>{
    return [...prevUser, { quote:uQuote , id: Math.random().toString()}]
  })
}

const deleteUserHandler = (quoteId)=>{
  setUserList(prevUser=>{
    const newList = prevUser.filter(user=> user.id !== quoteId)
    return newList
  })
}


  return (
    <div>
      <AddUser onAddQuote={addQuoteHandler}/>
      <UsersList users={usersList} onDelete={deleteUserHandler} />
    </div>
  );
}

export default App;
