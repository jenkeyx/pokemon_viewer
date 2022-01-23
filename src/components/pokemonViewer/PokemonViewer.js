import "./pokemonViewer.css"
import axios from "axios";
import {useEffect, useState} from "react";
import pokemonPlaceholder from "../../icons/pokemon_placeholder.png"

function PokemonViewer(props) {

    const stubPokemonInfo = {
        name: "select pokemon",
        sprites: {
            front_default: pokemonPlaceholder
        },
        moves: [],
        id: "",
        height: "",
        stats: [{}, {base_stat: ""}]
    }

    const [pokemonInfo, setPokemonInfo] = useState(stubPokemonInfo);

    useEffect(() => {
        if (props.selectedPokemon) {
            const apiUrl = "https://pokeapi.co/api/v2/pokemon/"

            axios.get(apiUrl + props.selectedPokemon).then((response) => {
                setPokemonInfo(response.data)
            })
        }
    }, [props.selectedPokemon]);


    if (pokemonInfo) {
        return (
            <div className={"pokemon-viewer"}>
                <div className={"name"}>
                    {pokemonInfo ? pokemonInfo.name : "select pokemon"}
                </div>
                <div className={"sprite"}>
                    <img alt={"pokemon"} src={pokemonInfo.sprites.front_default}/>
                </div>
                <div className={"stats"}>
                    <div>
                        {"Снялся в " + pokemonInfo.moves.length + " сериях"}
                    </div>
                    <div>
                        {"Id: " + pokemonInfo.id}
                    </div>
                    <div>
                        {"height: " + pokemonInfo.height}
                    </div>
                    <div>
                        {"attack: " + pokemonInfo.stats[1].base_stat}
                    </div>
                </div>
            </div>
        )
    } else {
        return null
    }
}

export default PokemonViewer;