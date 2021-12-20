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

    return(
        <div>
            <Link to='/dogs'>Create dog</Link>
            <h1></h1>
        </div>
    )
}

