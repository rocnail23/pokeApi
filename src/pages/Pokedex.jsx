import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm, useFormState } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Pagination from "../components/Pagination";
import CardPokemon from "../components/pokedex/CardPokemon";
import Select from "../components/pokedex/Select";

const Pokedex = () => {
  const { trainer } = useSelector((state) => state);
  const [pokemons, setPokemons] = useState();
  const [selectValue, setSelectValue] = useState("allPokemons")
  const [currentPagesPokemon, setcurrentPagesPokemon] = useState(1)
  const [pokemonPerPages, setpokemonPerPages] = useState(10)

  useEffect(() => {
    if(selectValue === "allPokemons"){
      const url = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";
    axios
      .get(url)
      .then((res) => setPokemons(res.data.results))
      .catch((err) => console.log(err));
    }else{
      axios.get(selectValue)
      .then(res => {
        const results = res.data.pokemon.map(e => e.pokemon)
        setPokemons(results)} )
      .catch(err => console.log(err))
    }
  }, [selectValue]);
  const {handleSubmit,reset,register} = useForm()
  const navigate = useNavigate()
  const submit = (data) => {
    navigate(`/pokedex/${data.idPokemon}`)
  }
  // get indexOfCurrentPost

  const IndexOfLastPokemon = currentPagesPokemon * pokemonPerPages
  const indexOfFirtsPokemon = IndexOfLastPokemon - pokemonPerPages
  const currentPokemon = pokemons?.slice(indexOfFirtsPokemon, IndexOfLastPokemon)
  const paginate = (pageNumber) => setcurrentPagesPokemon(pageNumber)
  
  return (
    <div className="pokedex">
      <header className="pokedex__header">
        <div className="pokedex_lines">
          <div className="redline">
            <img src="/images/pokedex-image.png" alt="" />
          </div>
          <div className="blackline"></div>
        </div>
        </header>
      <div className="pokedex__container">
      <h1>
          <span>hi {trainer}</span> here you will able to find your favorite
          pokemon{" "}
        </h1>
        <form onSubmit={handleSubmit(submit)}>

        <input {...register("idPokemon")} id="idPokemon" type="text" /> <button>enter</button>
        </form>
        <Select setSelectValue={setSelectValue} />
        <div className="pokedex__pokemons">
        {currentPokemon?.map((pokemon) => (
          <CardPokemon key={pokemon.url} pokemon={pokemon} />
        ))}
        </div>
        <Pagination pokemonPerPage={pokemonPerPages} totalPokemons={pokemons?.length} paginate={paginate} />
      </div>
    </div>
  );
};

export default Pokedex;
