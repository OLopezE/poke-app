import {React, useState, useEffect} from 'react'
import axios from "axios"
import './style.css'
import Pokecard from './pokecard';
import Test from './test';

export default function Pokelist() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded]= useState(false);
  const [pokemonCall, setPokemonCall] = useState([]);
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon]= useState([]);

  

  useEffect(()=>{
    setPokemonCall([])
      for(let i = 1; i < 152; i++){
        axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`)
          .then(({data}) => {
            // handle success
              if(data.name.includes(search) || data.id === search||search===''){
                setPokemonCall(pokemon => [...pokemon, data]);
              }
          })
          .catch(err => {
            // handle error
            setIsLoaded(true)
            setError(err)
          })
    }

  },[search])
  

  
  const pokemonList = pokemonCall.map((beast, idx)=><Pokecard beast = {beast} key={idx}></Pokecard>)


    return (
      <div>
        <div className='input-container'>
          <input className='search-engine' onChange={(event)=>setSearch(event.target.value)}></input>
        </div>
        <div className='grid pokelist'>
        {pokemonCall.length!==0?pokemonList:"No se encontró"}

      </div>
      </div>
  
    )
  
  
}
