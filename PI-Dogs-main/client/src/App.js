import './App.css';
//import { Router } from 'react-router';
import { Route,Routes} from 'react-router-dom';
//import Switch from "react-switch";
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
    <div className="App">
       <Routes>
        <Route  path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/' element={<About/>}/>
        <Route path='/dogCreated' element={<dogCreated/>}/>
        <Route path='/' element={<dogCard/>}/>
        <Route path='/dogDetails' element={dogDetails}/>
        <Route path='/' element={navBar}/>
        <Route path='/' element={Paged}/>
        </Routes>
    </div>
  );
}

export default App;
