import "./pokemonViewer.css"
import axios from "axios";
import {useEffect, useState} from "react";
import pokemonPlaceholder from "../../icons/pokemon_placeholder.png"
import {Typography} from "@mui/material";

function PokemonViewer(props) {

    const stubPokemonInfo = {
        name: "select pokemon",
        sprites: {
            front_default: pokemonPlaceholder
        },
        moves: [],
        id: "",
        height: "16",
        stats: [{}, {base_stat: ""}]
    }

    const [pokemonInfo, setPokemonInfo] = useState(stubPokemonInfo);
    const [isLoaded, setIsLoaded] = useState(null);

    useEffect(() => {
        if (props.selectedPokemon) {
            const apiUrl = "https://pokeapi.co/api/v2/pokemon/"

            axios.get(apiUrl + props.selectedPokemon).then((response) => {
                setPokemonInfo(response.data)
                setIsLoaded(true);
            })
        }
        return (setIsLoaded(false))
    }, [props.selectedPokemon]);

    //Имя с сервера приходит с маленькой буквы, потому надо вставить большую букву.
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    //возвращает увеличенные размеры спрайта маленьких покемонов
    function returnImgScale(height) {
        if (height === "0") {
            return "100%"
        } else if (height < 10) {
            return "200%"
        } else if (height >= 10 && height <= 15) {
            return "150%"
        } else {
            return "100%"
        }
    }

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