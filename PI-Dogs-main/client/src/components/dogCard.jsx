import React from 'react';
import {Link} from 'react-router-dom';

export default function dogCard({name,image,temperament,weight,id}){
    return(
        <><div className='dogCard'>
             <img src={image} alt='dogCard' className='cardImg' width = "400px" height="270px" />
            <h3>{name}</h3>
            <h3>{temperament}</h3>
            <Link to={`/${id}`}>
            <button className='masInfo'> Más Info </button>
            </Link>
             <h1>Temperament</h1>
            {/* {temperament? temperament.map((el)=>' '+ el +'') : temperament?.map((el)=>el.name + ',')}  */}
            </div>
            <div className='info'>
                <h4> Peso </h4> 
                <p> {weight} kilos</p> 
            </div>
            </>
    )
}