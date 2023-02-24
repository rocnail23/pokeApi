import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Select = ({setSelectValue}) => {
    const [types, setTypes] = useState()
    useEffect(() => {
        const url = `https://pokeapi.co/api/v2/type`
        axios.get(url)
        .then(res => setTypes(res.data.results))
        .catch(err => console.log(err))
    }, []) 
    const handleChange = (e) => {
        setSelectValue(e.target.value)
    }
  return (
    <select onChange={handleChange} name="" id="">
        <option value="allPokemons">all pokemons</option>
        {
            types?.map((type) => (
                <option key={type.url} value={type.url}>{type.name}</option>
            ))
        }
    </select>
  )
}

export default Select