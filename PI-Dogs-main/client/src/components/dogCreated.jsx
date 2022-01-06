import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { useState,useEffect } from "react";
import { addDog, addDogType, getTemperament } from "../actions/indexActions";
import {Link, useNavigate} from 'react-router-dom'
import { ValidateForm } from "./ValidateForm";
import './DogCreated.css';
import perro3 from '../img/perro2.jpg'



export default function DogCreated(){
    const dispatch=useDispatch();
    const history= useNavigate();
    const temperaments= useSelector((state) => state.temperaments)
    const [errors,setErrors] = useState({}) //estado local que arranca con un obj vacio
  
   
    useEffect(()=>{
        dispatch(getTemperament())
        return ()=>{
            dispatch(addDogType())
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
                    <button className="button_home">
                    <span id='span1'></span>
                    <span id='span2'></span>
                    <span id='span3'></span>
                    <span id='span4'></span> 
                        Go Home
                    </button>
                </Link>
            </div>
            <div className="fondo2">
                <section className="container">
                        <h1 className="titulo">Create your own Dog</h1>
                     <div className="cont">    
                        <form  className="cont_form" onSubmit={(e) => { handleSubmit(e) } }>

                            <div>
                            <h4 className="titulo_form">Creation Form</h4>
                            </div>
                        <div className="dogs_details">
                            <div className="div_order">
                                <input className="input" type='text' value={inputForm.name} name='name' placeholder="Enter a name" onChange={(e) => handleChange(e)}></input>
                                {errors.name && (<p className="p">{errors.name}</p>)}
                            
                            
                                
                                <input className="input" type='text' value={inputForm.life_spanMin} name='life_spanMin' placeholder="Enter minimum life expectancy" onChange={(e) => { handleChange(e); } }></input>
                                {errors.life_spanMin && (<p className="p">{errors.life_spanMin}</p>)}
                            
                            
                                
                                <input className="input"  type='text' value={inputForm.life_spanMax} name='life_spanMax' placeholder="Enter maximum life expectancy" onChange={(e) => { handleChange(e); } }></input>
                                {errors.life_spanMax && (<p className="p">{errors.life_spanMax}</p>)}
                            
                            </div>

                            <div className="div_order">
                            
                                <input className="input"  type='text' value={inputForm.heightMin} name='heightMin' placeholder="Enter the minimum height" onChange={(e) => { handleChange(e); } }></input>
                                {errors.heightMin && (<p className="p">{errors.heightMin}</p>)}
                           
                           
                                <input className="input" type='text' value={inputForm.heightMax} name='heightMax' placeholder="Enter the maximum height" onChange={(e) => { handleChange(e); } }></input>
                                {errors.heightMax && (<p className="p">{errors.heightMax}</p>)}
                          
                            </div>

                            <div className="div_order">
                            

                                <input className="input" type='text' value={inputForm.weightMin} name='weightMin' placeholder="Enter the minimum weight" onChange={(e) => { handleChange(e); } }></input>
                                {errors.weightMin && (<p className="p">{errors.weightMin}</p>)}
                            

                            
                                <input  className="input" type='text' value={inputForm.weightMax} name='weightMax' placeholder="Enter the maximum weight" onChange={(e) => { handleChange(e); } }></input>
                                {errors.weightMax && (<p className="p">{errors.weightMax}</p>)}
                            
                            
                            
                            
                             <div className="temperament">
                                <select className="s_temperament" onChange={(e) => handleSelectTemperament(e)}>
                                    <option  value=''>Temperaments</option>
                                    {temperaments.map((temp) => (
                                    <option className="op_temper"  key={Math.random(temp.id)} value={temp.name}>
                                    {temp.name}
                                    </option>))}
                                </select>
                                    
                             <div>
                                {inputForm.temperament.map(e =>
                                <button key={Math.random(e)} className="button_temp" onClick={() => handleDeleteTemperament(e)}>{e} 
                                </button>
                                )}
                             </div>
                                <ul>
                                    <li className="choice" >
                                        {inputForm.temperament.map(e =>  e)}
                                        
                                    </li>
                                </ul>
                            </div>
                        </div>
                        </div>
                           <div>
                            <button className="button_create" type='submit' onSubmit={(e) => handleSubmit(e)}>
                            <span id='span1'></span>
                            <span id='span2'></span>
                            <span id='span3'></span>
                            <span id='span4'></span> 
                                Create Dog
                            </button>
                            </div>
                        
                        </form>
                     </div>
                        <div>
                             <img className="img_create" src={perro3} alt='perro3'/>
                        </div>
                </section>
          </div>
          </>
           

           
        )
}