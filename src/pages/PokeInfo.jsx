import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PokeInfo = () => {
  const [poke, setPoke] = useState()  
  const {id} =  useParams()
  const [hasError, sethasError] = useState(false)
  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    axios.get(url)
    .then(res => {setPoke(res.data)
    sethasError(false)})
    .catch(err => { sethasError(true)
        console.log(err)})
  }, [id])
  console.log(poke)


  if(hasError){
    return <div>this pokemon with name "{id}" not found</div>
  } else {
 return (
        <div>
            <img src={poke?.sprites.other['official-artwork'].front_default} alt="" />
            <h1>{poke?.name}</h1>
        </div>
      )
  }
  
}

export default PokeInfo