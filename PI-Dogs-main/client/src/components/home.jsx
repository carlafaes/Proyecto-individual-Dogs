import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs,getTemperament } from "../actions/indexActions";
import { Link } from 'react-router-dom';
import DogCard from "./DogCard";
import Paged from './Paged'
import Temperament from "./Temperament";
import OrderAlfab from "./OrderAlfab";
import OrderWeight from './OrderWeight';
import OrderBreed from "./OrderBreed";
import SearchBar from "./SearchBar";


 export default function Home(){
    const dispatch= useDispatch();
    const allDogs= useSelector((state)=> state.dogs);//trae del reducer el estado dogs
    // const temperament=useSelector((state)=>state.temperament);
    const [currentPage,setCurrentPage]=useState(1);//guarda la pagina actual, y tiene la constante que setea la pagina actual
    const [dogsXPage,setDogsXPage]= useState(8);//dogs por pagina

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
    
    
    
   

    return(
        <Fragment> <div className="divlanding">
                <button onClick={e => {handleClick(e)}}>
                    Refresh
                </button>
            </div>
            <div>
                <SearchBar value={setCurrentPage} />
            </div>
           <div>
               <Link to='/createdDog'>Create Dog</Link>
           </div>
            <div>
                <OrderAlfab value={setCurrentPage} set={setOrder}/>
                <OrderWeight value={setCurrentPage} set={setOrder}/>
            </div>
        
            <div>
                <Paged
                key='6555'
                dogsXPage={dogsXPage}
                allDogs={allDogs.length}
                paginated={paginated}
                />
            </div>
            <section>
            <div className='dosFiltros'>
                <Temperament value={setCurrentPage}/>
                <OrderBreed value={setCurrentPage}/>       
             </div>
             </section>
            <div>
                    {currentDog && currentDog.map((el)=>{
                       // console.log(el)  
                    return(
                        <>
                        <DogCard
                            key={el.id}
                            name={el.name}
                            image={el.image}
                            weight={el.weight? el.weight[0] : el.weight_min}
                            temperament={el.temperament}
                            temperaments={el.temperaments}
                            id={el.id} 
                            />
                            </>
                            
                    ) 
                    
                    })
                }
                    </div>
        
        </Fragment>
    )
}

