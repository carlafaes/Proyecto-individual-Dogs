import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchByName } from "../actions/indexActions";
import './Searchbar.css';

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
        <div className="contSearch">
            <form onSubmit={onSubmit}>
                <input 
                className="search" 
                type='text' 
                placeholder="Buscar Raza.Por ejemplo:Alaskan Husky" 
                value={search} 
                onChange={onInputChange} />
                <input 
                className="submit"
                type='submit' 
                value='Buscar' 
                onSubmit={onSubmit} />
            </form>
        </div>
    )
}