import React from "react";
import {Link} from 'react-router-dom';
import './LandingPage.css';
import perro2 from '../img/perroLand.png'

export default function LandingPage(){
    return(
        <div className="divLand">
        <div className="cont">
            <h1 className="banner_textbox">
                <span id='text'>
                Welcome <br/> to the Dogs App
                </span>
                
            </h1>
            <Link to= '/home'>
                <button className="banner_btn-landing">
                    <span id='span1'></span>
                    <span id='span2'></span>
                    <span id='span3'></span>
                    <span id='span4'></span>
                    Enter</button>
            </Link>
            <img className="banner_imgP" src={perro2} alt='perro2'/>

        </div>
        </div>
    )
}