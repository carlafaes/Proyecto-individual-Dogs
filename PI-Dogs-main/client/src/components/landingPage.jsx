import React from "react";
import {Link} from 'react-router-dom';
import './LandingPage.css';
import perro2 from '../img/Sin título.png'

export default function LandingPage(){
    return(
        <div className="divLand">
        <div className="container">
        <div  className="textbox">
            <h1>
                Welcome to the Dogs App
            </h1>
            
        </div>
        <div className="btn-landing">
        <Link to= '/home'>
                <button>Enter</button>
            </Link>
        </div>
       
        <div className="imgP">
        <img src={perro2} alt='perro2'/>
        </div>
        </div>
        </div>
    )
}