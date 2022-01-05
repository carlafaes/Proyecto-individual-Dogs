import React from "react";
import { useDispatch } from "react-redux";
import {orderByWeight} from '../actions/indexActions'
import './Order.css';

export default function OrderByWeight({value,set}){
    const dispatch=useDispatch();

    function handlerFilterByWeight(e){
        dispatch(orderByWeight(e.target.value));
        value(1)
        set(`Ordenado ${e.target.value}`);
        console.log(e.target.value)
    }

    return(
        <div className="order">
            <label className="list__item">Weight</label>
            <select className="order_select" id='btn-order' onChange={(e)=> handlerFilterByWeight(e)}>
                {/* <option>⚖️</option> */}
                <option className="order_option" value='min' key={value}>Weight Min</option>
                <option className="order_option" value='max'>Weight Max</option>
            </select>
        </div>
    )

}