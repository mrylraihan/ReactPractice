import React from "react";
import './index.css'
// import ComponentC from './components/ComponentC'
import ComponentG from './components/ComponentG'
import ComponentW from "./components/ComponentW";



export const UserContext = React.createContext({})
export const ChannelContext = React.createContext({})

function App() {
 
  return (
    <div className="App">
      <h1>Welcome</h1>
      <UserContext.Provider value={{ firstName: 'Wallie'  }}>
        <ChannelContext.Provider value={{ lastName: 'Raihan' }}>
          {/* <div>
          <ComponentC />
          </div> */}
          <div>
            <ComponentG></ComponentG>   
          </div>
        </ChannelContext.Provider>
      </UserContext.Provider>
      <ComponentW/>
    </div>
  );
}


export default App;
