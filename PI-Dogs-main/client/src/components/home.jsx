import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs,getTemperament,filterByTemperament,filterCreated,filterbyValue } from "../actions/indexActions";
import { Link } from 'react-router-dom';
import DogCard from "./DogCard";
import Paged from './Paged'


 export default function Home(){
    const dispatch= useDispatch();
    const allDogs= useSelector((state)=> state.dogs);//trae del reducer el estado dogs
    const temperament=useSelector((state)=>state.temperaments);
    const [currentPage,setCurrentPage]=useState(1);//guarda la pagina actual, y tiene la constante que setea la pagina actual
    const [dogsXPage,setDogsXPage]= useState(9);//dogs por pagina

    const indexLastDog= currentPage * dogsXPage;
   //el index del ultimo dog es la currentPage, multiplicado por la cantidad de dogs por pagina
    const indexFirstDog= indexLastDog - dogsXPage;
    //el index del primer dog es igual al indice del ultimo perro menos la cantidad de dogs por pagina
    
    const currentDog= allDogs.slice(indexFirstDog,indexLastDog);
    //toma las porciones que hay en los parametros, desde el index del primer perro [0], hasta el index del ultimo perro[9],por lo que quedarian 9 dogs por pagina

    const [order,setOrder]= useState('');

    const paginated= (pageNumber)=>{
        setCurrentPage(pageNumber);
    }

    useEffect(()=>{
        dispatch(getDogs());
        dispatch(getTemperament());
    
    },[dispatch])

    function handleClick(e){//actualiza
        e.preventDefault();
        dispatch(getDogs());
        setCurrentPage(1);
    }
    
    function handleFilterByValue(e){
        dispatch(filterbyValue(e.target.value));
    }
    
    function handleFilterByTemperament(e){
        dispatch(filterByTemperament(e.target.value))
    }

    return(
        <Fragment key={456}>
            0 <div>
                <Link to='/'>Create dog</Link>
                <button onClick={e => {handleClick(e)}}>
                    Refresh
                </button>
            </div>
            <div>
            
                <select className="filtros">
                    <option value='all'>All</option>
                    <option value='created'>Created</option>
                    <option value='api'>API</option>
                </select>

                <select className="filtrosAB" onChange={e => {handleFilterByValue(e)}}>
                    <option value='AZ'>A-Z</option>
                    <option value='ZA'>Z-A</option>
                    <option value='WEIGHT'>Weight</option>
                </select>

                 <select className="filterByTemp" onChange={e => handleFilterByTemperament(e)}>
                    <option value='temperament'>Temperament</option>
                    {temperament?.map((el)=>{
                        <option value={el.name} key={el.id}>
                        {el.name}
                    </option>
                    })}

                </select> 
            </div>
        
            <div>
                <Paged
                dogsXPage={dogsXPage}
                allDogs={allDogs.length}
                paginated={paginated}
                />
            </div>
            <div>
                    {currentDog && currentDog.map((el)=>{
                        console.log(el)  
                    return(
                        <>
                        <DogCard
                            key={el.id}
                            name={el.name}
                            img={el.image}
                            weight={el.weight? el.weight[0] : el.weight_min}
                            temperament={el.temperament}
                            temperaments={el.temperaments}
                            id={el.id} 
                            /></>
                            
                    ) 
                    
                    })
                }
                    </div>
        
        </Fragment>
    )
}

