import React from 'react';
import {Link} from 'react-router-dom';

export default function dogCard({name,image,temperament,weight,id}){
    return(
        <><div className='dogCard'>
            <Link to={`/dogs/${id}`}>
            <img src={image} alt='dogCard' className='cardImg' />
            <h3>{name}</h3>
            <h1>Temperament</h1>
            {temperament? temperament.map((el)=>' '+ el +'') : temperament?.map((el)=>el.name + ',')}
            </Link>
                
            </div></>
    )
}