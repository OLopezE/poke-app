import React from 'react'
import { useEffect, useState} from 'react';
import axios from "axios"
import "./style.css"

//fetch pokemon
const fetchPokemon =  () =>{

}

export default function Pokecard() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded]= useState(false);
    const [pokemon, setPokemon] = useState([]);
    const [newPokemon, setNewPokemon] = useState(false);
    
    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random()*151)}/`)
        .then(({data}) => {
          // handle success
          setIsLoaded(true)
         setPokemon(data);
         console.log(data);
        })
        .catch(err => {
          // handle error
          setIsLoaded(true)
         setError(err)
        })
    }, [newPokemon]);

    if(error){
        return <div>Error {error.message}</div>;
    }else if(!isLoaded){
        return <div>Loading ...</div>;
    }else{
        return (
        <>
        <div className='titlecard'>
        <p>{pokemon.name}</p>
        </div>
            
            <img src={pokemon.sprites["front_default"]}></img>
            <button onClick={()=>{setNewPokemon(!newPokemon)}}>Random Pokemon</button>
        </>
        );
    }
    
}

