import React from 'react';
import {Link} from 'react-router-dom';

export default function dogCard({name,image,temperament,weight,id}){
    return(
        <><div className='dogCard'>
                <img src={image} alt='dogCard' className='cardImg' width = "300px" height="270px" />
                <h3>{name}</h3>
                <h3>Temperament:<br/>{temperament} </h3>
                <h4> Peso: <br/> {weight} Kg </h4> 
             </div>
            <div className='info'>
                <Link to={`/home/${id}`}>
                <button className='masInfo'> Más Info </button>
                </Link>
             </div>
            </>
    )
}