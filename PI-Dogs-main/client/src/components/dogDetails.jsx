import React from "react";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getDetails, unmountAllBreeds} from "../actions/indexActions";
import { Link } from "react-router-dom";
import { useParams } from "react-router";





export default function Detail(props){
    
    const dispatch= useDispatch();
    const {id}=useParams()
// console.log(props)
    useEffect(()=> { 
        dispatch(getDetails(id))//accedo al id pasandole props al componente props.match.params.id
        return () =>{
            dispatch(unmountAllBreeds())
            // console.log(dispatch)
        }
    },[dispatch,id])


    
const myDog= useSelector((state)=> state.detail); //me traigo el detalle desde el reducer 
// {console.log(myDog)}
return(
    <div>
        <div>
            {Object.values(myDog).length >0 ?
            <div>
                <h1>{myDog.name}</h1>
                <img src={myDog.image? myDog.image : '/img/perro1.png'}/>
                
                {/* este caso es para cuando la api y la DB traen diferente la info, entonces: myBreed no está creado en la DB? (o sea es de la api?), entonces q me traiga myBreed.genre pq en la api está como genre y es un array de strings le agrego un espacio pq sino las trae todas pegadas.Si no q mapee el genres de la DB q es un array de obj*/}
                <h4>Temperament: {!myDog.createdInDb ? myDog.temperament : myDog.temperaments}</h4> 
                <h4>Life Span: {myDog.life_span}</h4>
                <h4>Height[cm]: {myDog.height[0]+ '-' + myDog.height[1]}</h4>
                <h4>Weight [kg]: {myDog.weight[0]+ '-' + myDog.height[1]}</h4>
            </div> : <div> espera</div>
        }
        <Link to= '/home'>
            <button>Go back</button>
        </Link>
        </div>
    </div>
)
}
