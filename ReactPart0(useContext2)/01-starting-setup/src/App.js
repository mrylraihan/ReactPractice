import React from "react";
import './index.css'
import ComponentC from './components/ComponentC'


export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
 
  return (
    <div className="App">
      <h1>Welcome</h1>
      <UserContext.Provider value={'Vishwas'}>
        <ChannelContext.Provider value={'Codevolution'}>
          <ComponentC />        
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}


export default App;
