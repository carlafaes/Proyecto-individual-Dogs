import React from "react";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getDetails, unmountAllBreeds} from "../actions/indexActions";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import './DogDetails.css';


export default function Detail(props){
    
    const dispatch= useDispatch();
    const {id}=useParams()

    useEffect(()=> { 
        dispatch(getDetails(id))
    },[dispatch,id])


    
const myDog= useSelector((state)=> state.detail); //me traigo el detalle desde el reducer 
// {console.log(myDog)}
return(
    <div>
        <div className="contenedor_gral">
            {Object.values(myDog).length >0 ?
            <div className="contenedor_card">
                <h1 className="name">{myDog.name}</h1>
                <img className="img" src={myDog.image? myDog.image : '/img/perro2.jpg'}/>
                
                {/* este caso es para cuando la api y la DB traen diferente la info, entonces: myBreed no está creado en la DB? (o sea es de la api?), entonces q me traiga myBreed.genre pq en la api está como genre y es un array de strings le agrego un espacio pq sino las trae todas pegadas.Si no q mapee el genres de la DB q es un array de obj*/}
                <h4 className="info_text">Temperament: {!myDog.createdInDb ? myDog.temperament : myDog.temperaments.map(e => e.name + '.')}</h4> 
                <h4 className="info_text">Life Span: {myDog.life_span}</h4>
                <h4 className="info_text">Height[cm]: {myDog.height[0]+ '-' + myDog.height[1]}</h4>
                <h4 className="info_text">Weight [kg]: {myDog.weight[0]+ '-' + myDog.height[1]}</h4>
            </div> : <div className="loading"> espera</div>
        }
        <Link to= '/home'>
            <button className="back">Go back</button>
        </Link>
        </div>
    </div>
)
}
