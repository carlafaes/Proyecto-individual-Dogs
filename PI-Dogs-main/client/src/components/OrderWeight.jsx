import React from "react";
import { useDispatch } from "react-redux";
import {orderByWeight} from '../actions/indexActions'

export default function OrderByWeight({value}){
    const dispatch=useDispatch();

    function handlerFilterByWeight(e){
        e.preventDefault();
        dispatch(orderByWeight(e.target.value));
        value(1)
    }

    return(
        <div>
            <select onClick={(e)=> handlerFilterByWeight(e)}>
                <option value='weight'>Weight</option>
                <option value='min'>Weight Min</option>
                <option value='max'>Weight Max</option>
            </select>
        </div>
    )

}