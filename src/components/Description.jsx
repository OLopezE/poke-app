import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Description(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded]= useState(false);
    const [species, setSpecies] = useState([]);
    const [flavor, setFlavor] = useState("Desc");

    useEffect(()=>{
        axios.get(props.url)
        .then(({data}) => {
          // handle success
        setIsLoaded(true)
         setSpecies(data);
         //console.log(data)
        })
        .catch(err => {
          // handle error
          setIsLoaded(true)
         setError(err)
        })
    },[])

  return (
    <div>{flavor}</div>
  )
}
