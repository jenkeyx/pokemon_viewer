import "./chipsContainer.css"
import PokemonViewer from "../pokemonViewer/PokemonViewer";
import axios from "axios";
import {useEffect, useState} from "react";
import {Chip} from "@mui/material";

function ChipsContainer() {

    const [pokemons, setPokemons] = useState({});
    const [selectedPokemon, setSelectedPokemon] = useState()

    useEffect(() => {
        const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=6"
        axios.get(apiUrl).then((response) => {
            setPokemons(response.data.results)
        })
    }, [setPokemons]);

    function handleClick(e, index) {
        setSelectedPokemon(index)
    }

    return (
        <div className={"chips-container"}>
            <div className={"chips-wrap"}>
                {
                    Array.from(pokemons).map((pokemon) =>
                        <Chip
                            label={pokemon.name}
                            key={pokemon.name} color={"primary"}
                            onClick={(e) => handleClick(e, pokemon.name)}/>
                    )}
            </div>
            <PokemonViewer selectedPokemon={selectedPokemon}/>
        </div>
    )
}

export default ChipsContainer