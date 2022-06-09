import {React, useState, useEffect} from 'react'
import axios from "axios"
import './style.css'
import Pokecard from './pokecard';
import Test from './test';

export default function Pokelist() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded]= useState(false);
  const [pokemon, setPokemon] = useState([]);

  useEffect(()=>{
    for(let i = 1; i < 152; i++){
      axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        .then(({data}) => {
          // handle success
         setPokemon(pokemon => [...pokemon, data]);
         
        })
        .catch(err => {
          // handle error
          setIsLoaded(true)
         setError(err)
        })
    }
    
  },[])
  
  const pokemonList = pokemon.map((beast)=><Pokecard beast = {beast}></Pokecard>)

  function readList(){
    console.log(pokemon)
  }
  return (
    <div>
      <Test pokemon = {pokemon[0]}/>
      {pokemonList}
    </div>
  )
}
