import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchByName } from "../actions/indexActions";

export default function SearchBar({value}){
    // console.log('este es el console del searchbar', {value})
    const [search,setSearch] =useState('');
    const dispatch= useDispatch();

    function onSubmit(e){
        e.preventDefault(e);
        dispatch(searchByName(search))
        setSearch('');
    }

    function onInputChange(e){
        e.preventDefault();
        setSearch(e.target.value);
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input 
                type='text' 
                placeholder="Buscar Raza.Por ejemplo:Alaskan Husky" 
                value={search} 
                onChange={onInputChange} />
                <input 
                type='submit' 
                value='Buscar' 
                onSubmit={onSubmit} />
            </form>
        </div>
    )
}