import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../actions/indexActions";
import { Link } from "react-router-dom";

export default function Home(){
    const dispatch= useDispatch();
    const allDogs= useSelector((state)=> state.dogs);

    useEffect(()=>{
        dispatch(getDogs());
    
    },[dispatch])

    function handleClick(e){
        e.preventDefault();
        dispatch(getDogs());
    }

    return(
        <div>
            <Link to='/dogs'>Create dog</Link>
            <button onClick={e => {handleClick(e)}}>
                Refresh
            </button>
        <div>
        
            <select>
                <option value='asc'>Ascendente</option>
                <option value='desc'>Descendente</option>
            </select>
        </div>
        </div>
    )
}

