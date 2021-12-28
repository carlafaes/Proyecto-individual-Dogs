import './App.css';
//import { Router } from 'react-router';
import { Route,Routes} from 'react-router-dom';
//import Switch from "react-switch";
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import About from './components/About';
import dogCard from './components/DogCard';
import dogCreated from './components/DogCreated';
import dogDetails from './components/DogDetails';
import navBar from './components/NavBar';
import Paged from './components/Paged';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route  path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/dogCreated' element={<dogCreated/>}/>
        <Route path='/dogDetails' element={<dogDetails/>}/>
        </Routes>
    </div>
  );
}

export default App;
