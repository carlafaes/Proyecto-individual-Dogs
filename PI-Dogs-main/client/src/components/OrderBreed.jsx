import React from "react";
import { useDispatch } from "react-redux";
import { filterBreed } from "../actions/indexActions";


export default function OrderBreed({value}){
    console.log({value});
    const dispatch= useDispatch();

    function handleFilterByBreed(e){
        dispatch(filterBreed(e.target.value));
    }

    return(
        <div>
            <label>Breed</label>
            <select onChange={(e) => handleFilterByBreed(e)}>
                <option value='allDogs'>All dogs</option>
                <option value='apiDogs'>Api dogs</option>
                <option value='createdDogs'>Created dogs</option>
            </select>
        </div>
    )

}