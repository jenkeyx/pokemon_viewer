import "./pokemonViewer.css"
import axios from "axios";
import {useEffect, useState} from "react";
import pokemonPlaceholder from "../../icons/pokemon_placeholder.png"
import {Typography} from "@mui/material";
import capitalizeFirstLetter from "../../helpers/capitalizeFirstLetter";
import returnImgScale from "../../helpers/returnImgScale";

function PokemonViewer(props) {

    const API_URL = "https://pokeapi.co/api/v2/pokemon/"

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
    const [isLoaded, setIsLoaded] = useState(null);

    useEffect(() => {
        if (props.selectedPokemon) {

            axios.get(API_URL + props.selectedPokemon).then((response) => {
                setPokemonInfo(response.data)
                setIsLoaded(true);
            })
        }
        return (setIsLoaded(false))
    }, [props.selectedPokemon]);


    let imgScale = returnImgScale(pokemonInfo.height)

    return (
        <div className={"pokemon-viewer"}>
            <Typography sx={{fontWeight: "bold", lineHeight: "100%"}} variant={"h3"}>
                {isLoaded ? capitalizeFirstLetter(pokemonInfo.name) :
                    "Pokemon"
                }
            </Typography>
            <div className={"sprite"}>
                {isLoaded ?
                    <img alt={"pokemon"}
                         src={pokemonInfo.sprites.front_default}
                         height={imgScale}
                    /> : null}
            </div>
            <div className={"stats"}>
                <Typography sx={{fontWeight: 500, fontSize: "17px", lineHeight: "150%"}}>
                    {"Снялся в " + pokemonInfo.moves.length + " сериях"}
                </Typography>
                <Typography sx={{fontWeight: 500, fontSize: "17px", lineHeight: "150%"}}>
                    {"Id: " + pokemonInfo.id}
                </Typography>
                <Typography sx={{fontWeight: 500, fontSize: "17px", lineHeight: "150%"}}>
                    {"height: " + pokemonInfo.height}
                </Typography>
                <Typography sx={{fontWeight: 500, fontSize: "17px", lineHeight: "150%"}}>
                    {"attack: " + pokemonInfo.stats[1].base_stat}
                </Typography>
            </div>
        </div>
    )
}

export default PokemonViewer;