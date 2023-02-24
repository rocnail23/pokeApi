import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const CardPokemon = ({pokemon}) => {
    const [poke, setPoke] = useState()

    useEffect(() => {
        axios.get(pokemon.url)
        .then(res => setPoke(res.data))
        .catch(err => console.log(err))
    }, [])
    
   const navigate = useNavigate()
   const idClick = () => {
     navigate(`/pokedex/${poke?.id}`)
   }
  return (
    

    <div onClick={idClick} className={`card_pokemon border-${poke?.types[0].type.name}`}>
        
        <div className={`card_pokemon-bg bg-${poke?.types[0].type.name}`}>
        <img src={poke?.sprites.other['official-artwork'].front_default} alt="" />
        </div>
        <h1 className={`card_pokemon-name color-${poke?.types[0].type.name}`}>{poke?.name}</h1>
        <ul className='stat_ul'>
            {poke?.types.map(type => (
                <li className='li-m' key={type.type.name}>{type.type.name}</li>

            ))}
        </ul>
        
        <ul className='stat'>
            <li >{poke?.stats[0].stat.name} <span className={`color-${poke?.types[0].type.name}`}>{poke?.stats[0].base_stat}</span></li>
            <li >{poke?.stats[1].stat.name} <span className={`color-${poke?.types[0].type.name}`}>{poke?.stats[1].base_stat}</span></li>
            <li >{poke?.stats[2].stat.name} <span className={`color-${poke?.types[0].type.name}`}>{poke?.stats[2].base_stat}</span></li>
            <li >{poke?.stats[5].stat.name} <span className={`color-${poke?.types[0].type.name}`}>{poke?.stats[5].base_stat}</span></li>
        </ul>
        
    </div>
  )
}

export default CardPokemon