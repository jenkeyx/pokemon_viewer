import "./chips-container.css"
import PokemonViewer from "../pokemonViewer/PokemonViewer";
import axios from "axios";
import {useEffect, useState} from "react";
import {Chip} from "@mui/material";
import {API_URL} from "../../App";

function ChipsContainer() {

    const [pokemons, setPokemons] = useState({});
    const [selectedPokemon, setSelectedPokemon] = useState()

    useEffect(() => {

        axios.get(API_URL + "?limit=6").then((response) => {
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