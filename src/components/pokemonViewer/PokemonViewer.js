import "./pokemonViewer.css"
import axios from "axios";
import {useEffect, useState} from "react";
import pokemonPlaceholder from "../../icons/pokemon_placeholder.png"

function PokemonViewer(props) {

    useEffect(() => {
        if (props.selectedPokemon) {
            const apiUrl = "https://pokeapi.co/api/v2/pokemon/"

            axios.get(apiUrl + props.selectedPokemon).then((response) => {
                setPokemonInfo(response.data)
            })
        }
    }, [props.selectedPokemon]);

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

    //Имя с сервера приходит с маленькой буквы, потому надо вставить большую букву.
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const [pokemonInfo, setPokemonInfo] = useState(stubPokemonInfo);

    //возвращает увеличенные размеры спрайта маленьких покемонов
    function returnImgScale(height) {
        if (height < 10) {
            return "200%"
        } else if (height >= 10 && height <= 15) {
            return "150%"
        } else {
            return "100%"
        }
    }

    if (pokemonInfo) {
        return (
            <div className={"pokemon-viewer"}>
                <div className={"name"}>
                    {pokemonInfo ? capitalizeFirstLetter(pokemonInfo.name) : "Select pokemon"}
                </div>
                <div className={"sprite"}>
                    <img alt={"pokemon"}
                         width={returnImgScale(pokemonInfo.height)}
                         height={returnImgScale(pokemonInfo.height)}
                         src={pokemonInfo.sprites.front_default}/>
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