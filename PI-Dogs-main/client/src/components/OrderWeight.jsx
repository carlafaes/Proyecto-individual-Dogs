import React from "react";
import { useDispatch } from "react-redux";
import {orderByWeight} from '../actions/indexActions'

export default function OrderByWeight({value,set}){
    const dispatch=useDispatch();

    function handlerFilterByWeight(e){
        dispatch(orderByWeight(e.target.value));
        value(1)
        set(`Ordenado ${e.target.value}`);
        console.log(e.target.value)
    }

    return(
        <div>
            <label>Weight</label>
            <select onChange={(e)=> handlerFilterByWeight(e)}>
                <option value='min' key={value}>Weight Min</option>
                <option value='max'>Weight Max</option>
            </select>
        </div>
    )

}