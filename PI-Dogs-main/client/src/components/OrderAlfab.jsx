import React from "react";
import { useDispatch } from "react-redux";
import {orderBy} from '../actions/indexActions'
import './Order.css';

export default function OrderAlfab({value,set}){
    const dispatch=useDispatch();

    function handleFilterByAZ(e){
        e.preventDefault();
        dispatch(orderBy(e.target.value));
        set(`Ordenado ${e.target.value}`);
    }

    return(
        
        <div className="order" >
        <label className="list__item">Order</label>
        <select className="order_select" id='btn-order'   onClick={(e)=> handleFilterByAZ(e)}>
            {/* <option className="order_option"  >A-Z</option> */}
            <option  className="order_option" value='AZ'>A-Z</option>
            <option className="order_option"  value='ZA'>Z-A</option>
        </select>
        </div>
    )
}

