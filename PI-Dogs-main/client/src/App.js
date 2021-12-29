import './App.css';
//import { Router } from 'react-router';
import { Route,Routes} from 'react-router-dom';
//import Switch from "react-switch";
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import DogCreated from './components/DogCreated';
import DogDetails from './components/DogDetails';


function App() {
  return (
    
    <div className="App">
       <Routes>
        <Route  path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<Home/>}/>
       {/* <Route path='/dogCreated' element={<DogCreated/>}/> */}
        {/* <Route path='/dogDetails' element={<DogDetails/>}/> */}
        </Routes>
    </div>
  );
}

export default App;
