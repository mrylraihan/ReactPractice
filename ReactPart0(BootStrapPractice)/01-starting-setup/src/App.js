
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./components/Header";
import Btn from "./components/Btn";
import Crsl from "./components/Crsl";
import Mdl from "./components/Mdl";
import ExampleModal from "./components/Example";
import BsForms from "./components/BsForms";

function App() {
  
  return (
    <div>
      <Header/>
      <Crsl/>
      <Btn/>
      <Mdl/>
      <ExampleModal/>
      <BsForms/>
      <h1>BootStrap Practice</h1>
    </div>
  );
}


export default App;
