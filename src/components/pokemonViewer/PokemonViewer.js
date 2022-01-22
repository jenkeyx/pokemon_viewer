import "./pokemonViewer.css"
import axios from "axios";
import {useEffect, useState} from "react";

function PokemonViewer(props) {

    const [pokemonInfo, setPokemonInfo] = useState();

    useEffect(() => {
        const apiUrl = "https://pokeapi.co/api/v2/pokemon/"

        axios.get(apiUrl + props.selectedPokemon).then((response) => {
            setPokemonInfo(response.data)
        })

    },);


    if (pokemonInfo){
        return (
            <div className={"pokemon-viewer"}>
                <div className={"name"}>
                    {pokemonInfo.name}
                </div>
                <div className={"sprite"}>
                    <img alt={"pokemon " + pokemonInfo.name + " picture"} src={pokemonInfo.sprites.front_default}/>
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
    }else{
        return null
    }
}

export default PokemonViewer;