import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { filterByTemperament } from "../actions/indexActions";
import './Order.css';

export default function Temperament({value}){
    const allTemperament= useSelector((state) => state.temperaments);
    const dispatch= useDispatch();

    function handleFilterByTemperament(e){
        e.preventDefault();
        dispatch(filterByTemperament(e.target.value))
    }

    
return(
    <div className="order">
        <label>Temperament</label>
         <select className="order_select" value='temperament' onChange={e => handleFilterByTemperament(e)}>
                    <option className="order_option" >🐕‍🦺🐕</option>
                    {allTemperament && allTemperament.map((el)=>( 
                     <option  className="order_option"  value={el.name} key={el.id}>
                        {el.name}
                    </option>
                    ))
                    }
         </select> 
    </div>
)
}
