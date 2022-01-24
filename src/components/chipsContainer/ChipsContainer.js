import "./chips-container.css";
import PokemonCard from "../pokemonCard/PokemonCard";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Chip } from "@mui/material";
import { API_URL } from "../../App";

function ChipsContainer() {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState("bulbasaur");

  useEffect(() => {
    axios
      .get(API_URL + "?limit=6")
      .then((response) => {
        const responseData = response.data.results;
        setPokemons(responseData);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        }
      });
  }, []);

  function handleClick(e, index) {
    setSelectedPokemon(index);
  }

  return (
    <div className={"chips-container"}>
      <div className={"chips-wrap"}>
        {pokemons.map((pokemon) => (
          <Chip
            label={pokemon.name}
            key={pokemon.name}
            color={"primary"}
            onClick={(e) => handleClick(e, pokemon.name)}
          />
        ))}
      </div>
      <PokemonCard selectedPokemon={selectedPokemon} />
    </div>
  );
}

export default ChipsContainer;
