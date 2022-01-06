import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { filterBreed } from "../actions/indexActions";
import './Order.css';


export default function OrderBreed(){
    // console.log({value});
    const dispatch= useDispatch();

    function handleFilterByBreed(e){
        dispatch(filterBreed(e.target.value));
    }

  
    return(
        <div>
        <div className="order">
            <label className="list__item">Breed</label>
            <select className="order_select" id='btn-order' onChange={(e) => handleFilterByBreed(e)}>
                <option className="order_option"  >🐶</option>
                <option className="order_option" value='allDogs'>All dogs</option>
                <option className="order_option" value='apiDogs'>Api dogs</option>
                <option className="order_option" value='createdDogs'>
                    Created dogs
                  </option> 
                
            </select>
        </div>
        </div>
    )

}