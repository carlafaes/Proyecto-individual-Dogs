import './App.css';
import { Router } from 'react-router';
import {BrowserRouter, Route} from 'react-router-dom';
import Switch from "react-switch";
import LandingPage from './components/landingPage';
import Home from './components/home';
import About from './components/about';
import dogCard from './components/dogCard';
import dogCreated from './components/dogCreated';
import dogDetails from './components/dogDetails';
import navBar from './components/navBar';
import Paged from './components/paged';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Router>
        <Route exact path='/' component={LandingPage}/>
        <Route path='/home' component={Home}/>
        <Route path='/' component={About}/>
        <Route path='/dogCreated' component={dogCreated}/>
        <Route path='/' component={dogCard}/>
        <Route path='/dogDetails' component={dogDetails}/>
        <Route path='/' component={navBar}/>
        <Route path='/' component={Paged}/>
     </Router>
   
    </div>
    </BrowserRouter>
  );
}

export default App;
