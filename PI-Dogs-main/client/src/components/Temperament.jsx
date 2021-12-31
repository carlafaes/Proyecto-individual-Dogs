import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { filterByTemperament } from "../actions/indexActions";

export default function Temperament({value}){
    const allTemperament= useSelector((state) => state.temperaments);
    const dispatch= useDispatch();

    function handleFilterByTemperament(e){
        e.preventDefault();
        dispatch(filterByTemperament(e.target.value))
    }

    
return(
    <div>
        <label>Temperament</label>
         <select value='temperament' className="filterByTemp" onChange={e => handleFilterByTemperament(e)}>
            
                    {allTemperament && allTemperament.map((el)=>(
                     <option value={el.name} key={el.id}>
                        {el.name}
                    </option>
                    ))
                    }
         </select> 
    </div>
)
}
