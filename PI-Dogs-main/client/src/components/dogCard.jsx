import React from 'react';
import {Link} from 'react-router-dom';
import './DogCard.css';
import perro3 from '../img/perro2.jpg'

export default function dogCard({name,image,temperament,weight,id}){
    return(
        <><div className='dogCard'>
            <div className='contenedor'>
            <div className='figure'>
                <img src={image? image : perro3} alt={id} className='cardImg'  />
                <div className='capa'>
                <h3 className='text_capa'>{name}</h3>
                <h3 className='text_capa'>Temperament:<br/>{temperament} </h3>
                <h4 className='text_capa'> Peso: <br/> {weight[0]} Kg </h4> 
                </div>
            </div>  
            <div className='info'>
                <Link to={`/home/${id}`}>
                <button className='masInfo'>
                🖱️Click here 
                </button>
                </Link>
           </div>
          </div>
          </div>
       </>
    )
}