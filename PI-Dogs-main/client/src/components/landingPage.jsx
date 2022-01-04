import React from "react";
import {Link} from 'react-router-dom';
import './LandingPage.css';
import perro2 from '../img/Sin título.png'

export default function LandingPage(){
    return(
        <div className="divLand">
        <div className="cont">
            <h1 className="banner_textbox">
                Welcome <br/> to the Dogs App
            </h1>
            <Link to= '/home'>
                <button className="banner_btn-landing">Enter</button>
            </Link>
            <img className="banner_imgP" src={perro2} alt='perro2'/>

        </div>
        </div>
    )
}