import "./pokemonViewer.css"
import axios from "axios";
import {useEffect, useState} from "react";
import pokemonPlaceholder from "../../icons/pokemon_placeholder.png"
import "@fontsource/raleway/400.css"

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
            <div className={"name"}>
                {isLoaded ? capitalizeFirstLetter(pokemonInfo.name) :
                    "Pokemon"
                }
            </div>
            <div className={"sprite"}>
                {isLoaded ?
                    <img alt={"pokemon"}
                         src={pokemonInfo.sprites.front_default}
                         height={imgScale}
                    /> : null}
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
}

export default PokemonViewer;