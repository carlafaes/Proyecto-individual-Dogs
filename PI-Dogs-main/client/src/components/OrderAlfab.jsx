import React from "react";
import { useDispatch } from "react-redux";
import {orderBy} from '../actions/indexActions'

export default function OrderAlfab({value,set}){
    const dispatch=useDispatch();

    function handleFilterByAZ(e){
        e.preventDefault();
        dispatch(orderBy(e.target.value));
        set(`Ordenado ${e.target.value}`);
    }

    return(
        <select onClick={(e)=> handleFilterByAZ(e)}>
            <option>Order</option>
            <option value='AZ'>A-Z</option>
            <option value='ZA'>Z-A</option>
        </select>
    )
}

