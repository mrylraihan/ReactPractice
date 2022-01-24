import React, { useState } from 'react';
import H1 from './components/UI/H1';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


const App =()=>{
  const [listOfUsers, setListOfUsers] = useState([])

  const addUserList = (uName, uAge)=>{
    setListOfUsers(prev=>{
      return [...prev, { name: uName, age: uAge, id: Math.random().toString()}]
    })
  }
  const deleteHandler = (id)=>{
    setListOfUsers(prevUser=>{
      const newList = prevUser.filter(user=> user.id !== id)
      return newList
    })
  }


console.log(listOfUsers);
  return (
    <div>
      <H1>Hello</H1>
      <AddUser onAddUser={addUserList}/>
      <UsersList onDelete={deleteHandler} users={listOfUsers}/>
    </div>
  );
}
// function App() {
//   return (
//     <div>
//       <AddUser/>
//     </div>
//   );
// }

export default App;
