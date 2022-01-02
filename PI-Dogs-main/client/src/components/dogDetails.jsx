import React from "react";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getDetails, unmountAllBreeds} from "../actions/indexActions";
import { Link } from "react-router-dom";

export default function Detail(props){
    const dispatch= useDispatch();
console.log(props)
    useEffect(()=> { 
        dispatch(getDetails(props.id))//accedo al id pasandole props al componente
        return () =>{
            dispatch()
            console.log(dispatch)
        }
    },[dispatch,props.id])


    
const myDog= useSelector((state)=> state.detail); //me traigo el detalle desde el reducer 

return(
    <div>
        <div>
            {myDog.length >0 ?
            <div>
                <h1>{myDog[0].name}</h1>
                <img src={myDog[0].image || 'https://estaticos-cdn.elperiodico.com/clip/7e367745-30f8-4c75-9857-8bb758e65329_alta-libre-aspect-ratio_default_0.png'}/>

                {/* este caso es para cuando la api y la DB traen diferente la info, entonces: myBreed no está creado en la DB? (o sea es de la api?), entonces q me traiga myBreed.genre pq en la api está como genre y es un array de strings le agrego un espacio pq sino las trae todas pegadas.Si no q mapee el genres de la DB q es un array de obj*/}
                <h4>Temperament: {!myDog[0].createdInDb ? myDog[0].temperament.join(' *') : myDog[0].temperaments.map(e => e.name + (' *'))}</h4>
                <h4>Life Span: {myDog[0].life_span}</h4>
                <h4>Height[cm]: {myDog[0].height}</h4>
                <h4>Weight [kg]: {myDog[0].weight}</h4>
            </div> : <div>loading va aca</div>
        }
        <Link to= '/home'>
            <button>Go back</button>
        </Link>
        </div>
    </div>
)
}
