import React from 'react'
import { useEffect, useState} from 'react';
import axios from "axios"
import "./style.css"


export default function Pokecard(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded]= useState(false);
    const [pokemon, setPokemon] = useState([]);
    const [name, setName]= useState("")
    const [newPokemon, setNewPokemon] = useState(false);

    function upperCaseFirst(name){
        return name.charAt(0).toUpperCase() + name.slice(1)
    }

    const tipos ={
        normal: ["#757575", "#E0E0E0", "#F5F5F5"],
        fire: ["#EF6C00", "#FF9800","#FFE0B2"],
        water: ["#1565C0","#2196F3", "#BBDEFB"],
        electric: ["#FBC02D","#FFF59D", "#FFFDE7" ],
        grass: ["#558B2F","#8BC34A", "#DCEDC8"],
        ice:["#00ACC1", "#26C6DA","#E0F7FA" ],
        fighting:["#6D4C41", "#8D6E63", "#D7CCC8"],
        poison:["#8E24AA","#BA68C8","#E1BEE7"],
        ground:["#FFB300","#FFD54F","#FFECB3"],
        flying:["#0277BD","#29B6F6","#B3E5FC"],
        psychic:["#EC407A","#F48FB1","#FCE4EC"],
        bug:["#7CB342","#AED581","#DCEDC8"],
        rock:["#6D4C41","#A1887F","#D7CCC8"],
        ghost:["#7E57C2","#B39DDB","#EDE7F6"],
        dragon:["#303F9F","#7986CB","#C5CAE9"],
        fairy:["#F48FB1","#F8BBD0","#FCE4EC"],
        default:["","",""]


    } 
    
    useEffect(()=>{
        if(props.beast != undefined){
            setPokemon(props.beast)
            setIsLoaded(true)
        }

    }, [pokemon]);

    if(error){
        return <div>Error {error.message}</div>;
    }else if(!isLoaded){
        return <div></div>;
    }else{

        let color = tipos.hasOwnProperty(pokemon.types[0].type.name)? tipos[pokemon.types[0].type.name]:tipos.default
        return (
        <>
        <div className='card' style={{backgroundColor: color[2]}}>
            <div className='title-card' style={{backgroundColor: color[0]}}>
                <h2 className='name'>{upperCaseFirst(pokemon.name)}</h2>
                <h5 className='types'>{pokemon.types.map((tipo)=>tipo.type.name + " ")}</h5>
            </div>
            <img className='image' src={pokemon.sprites["front_default"]}></img>
            
        </div>
        </>
        );
    }
    
}

