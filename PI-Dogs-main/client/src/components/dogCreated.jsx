import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { useState,useEffect } from "react";
import { addDog, getTemperament,unmountAllBreeds } from "../actions/indexActions";
import {Link, useNavigate} from 'react-router-dom'
import { ValidateForm } from "./ValidateForm";




export default function DogCreated(){
    const dispatch=useDispatch();
    const history= useNavigate();
    const temperaments= useSelector((state) => state.temperaments)
    const [errors,setErrors] = useState({}) //estado local que arranca con un obj vacio
  
   
    useEffect(()=>{
        dispatch(getTemperament())
        return ()=>{
            dispatch(unmountAllBreeds())
        }
    },[dispatch]);

    
    const [inputForm,setInputForm] = useState({ //renderizo el form con los inputs
        name: '',
        image: '',
        life_spanMin: '',
        life_spanMax: '',
        heightMin: '',
        heightMax: '',
        weightMin: '',
        weightMax: '',
        temperament: [],//Si coloco un string vacio no me da la posibilidad de colocar mas de 1 temperamento
    })

    function handleChange(e){
        setInputForm({
            ...inputForm,
            [e.target.name] : e.target.value})
        setErrors(ValidateForm({...inputForm, [e.target.name]: e.target.value})) 
    }

    function handleSelectTemperament(e){
        setInputForm({
            ...inputForm, 
            temperament:[...inputForm.temperament,e.target.value]})
        setErrors(ValidateForm({...inputForm,temperament:e.target.value}))
    }

    function handleDeleteTemperament(e){
        setInputForm({
            ...inputForm, 
            temperament:[...inputForm.temperament.filter(temp => temp !== e)]
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        let checkErr= [];
        console.log(checkErr)
        if(inputForm.temperament.length < 1){//asegura q haya temperament
            checkErr.push('requires at least one temperament')
        }
        //object.value devuelve un array con los valores correspondientes a las prop enum de un obj
        if(Object.values(errors).length || checkErr.length ){
            return alert(Object.values(errors).concat(checkErr).join('\n'));//controla errores
        }

        var succesDog= {
            name: inputForm.name,
            image:inputForm.image,
            life_span: inputForm.life_spanMin === inputForm.life_spanMax?
            inputForm.life_spanMax : 
            inputForm.life_spanMin+ ' - ' + inputForm.life_spanMax,
            height: inputForm.heightMin === inputForm.heightMax?
            inputForm.heightMax : 
            inputForm.heightMin+ ' - ' +inputForm.heightMax,
            weight: inputForm.weightMin === inputForm.weightMax?
            inputForm.weightMax :
            inputForm.weightMin+ ' - ' +inputForm.weightMax,
            temperament: inputForm.temperament 
        }

        dispatch(addDog(succesDog))
        alert('successfully created dog');

        
        setInputForm({
            name:'',
            image:'',
            life_spanMin: '',
            life_spanMax:'',
            heightMin: '',
            weightMin:'',
            weightMax:'',
            temperament:[]
        })
    
        history('/home')

     }

        return(
            <><div>
                <Link to='/home'>
                    <button>
                        Go Home
                    </button>
                </Link>
            </div><div>
                    <section>
                        <h1>Create your own Dog</h1>
                        <form  onSubmit={(e) => { handleSubmit(e) } }>
                            <h4>Creation Form</h4>
                            <div>
                                <input type='text' value={inputForm.name} name='name' placeholder="Enter a name" onChange={(e) => handleChange(e)}></input>
                                {errors.name && (<p>{errors.name}</p>)}
                            </div>
                            <div>
                                <input type='text' value={inputForm.life_spanMin} name='life_spanMin' placeholder="Enter minimum life expectancy" onChange={(e) => { handleChange(e); } }></input>
                                {errors.life_spanMin && (<p>{errors.life_spanMin}</p>)}
                            </div>
                            <div>
                                <input type='text' value={inputForm.life_spanMax} name='life_spanMax' placeholder="Enter maximum life expectancy" onChange={(e) => { handleChange(e); } }></input>
                                {errors.life_spanMax && (<p>{errors.life_spanMax}</p>)}
                            </div>
                            <div>
                                <input type='text' value={inputForm.heightMin} name='heightMin' placeholder="Enter the minimum height" onChange={(e) => { handleChange(e); } }></input>
                                {errors.heightMin && (<p>{errors.heightMin}</p>)}
                            </div>

                            <div>
                                <input type='text' value={inputForm.heightMax} name='heightMax' placeholder="Enter the maximum height" onChange={(e) => { handleChange(e); } }></input>
                                {errors.heightMax && (<p>{errors.heightMax}</p>)}
                            </div>

                            <div>
                                <input type='text' value={inputForm.weightMin} name='weightMin' placeholder="Enter the minimum weight" onChange={(e) => { handleChange(e); } }></input>
                                {errors.weightMin && (<p>{errors.weightMin}</p>)}
                            </div>

                            <div>
                                <input type='text' value={inputForm.weightMax} name='weightMax' placeholder="Enter the maximum weight" onChange={(e) => { handleChange(e); } }></input>
                                {errors.weightMax && (<p>{errors.weightMax}</p>)}
                            </div>

                            <div>
                             <img src=' /img/perro2.jpg' alt='perro2'/>
                            </div>
                            <div>
                                <select onChange={(e) => handleSelectTemperament(e)}>
                                    <option value=''>
                                        Seleccione Temperamentos
                                        </option>
                                    {temperaments.map((temp) => (
                                    <option 
                                    key={temp.id} 
                                    value={temp.name}>
                                    {temp.name}
                                    </option>))}
                                </select>
                                <ul>
                                    <li>
                                        {inputForm.temperament.map(e =>  e)}
                                        
                                    </li>
                                </ul>
                            </div>
                            <button type='submit' onSubmit={(e) => handleSubmit(e)}>Create Dog</button>
                            <br />
                        </form>
                        <div>
                            {inputForm.temperament.map(e =>
                             <button onClick={() => handleDeleteTemperament(e)}>{e} 
                             </button>
                            )}
                        </div>
                    </section>
                </div></>
           

           
        )
}