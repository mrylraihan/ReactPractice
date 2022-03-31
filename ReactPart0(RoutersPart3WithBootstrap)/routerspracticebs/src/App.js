import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Nav/Header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LandPg from './components/LandingPg/LandPg';
import Home from './components/LandingPg/Home';
import About from './components/LandingPg/About';
import Mission from './components/LandingPg/Mission';
function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Switch>
        <Route exact path='/'><LandPg/></Route> 
        <Route path='/Home'><Home/></Route>
        <Route path='/About'><About/></Route>
        <Route path='/Mission'><Mission/></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
