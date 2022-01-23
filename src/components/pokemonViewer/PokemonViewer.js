import "./pokemon-viewer.css";
import axios from "axios";
import React, {useEffect, useState} from "react";
import {Typography} from "@mui/material";
import capitalizeFirstLetter from "../../helpers/capitalizeFirstLetter";
import returnImgScale from "../../helpers/returnImgScale";
import {API_URL} from "../../App";
import PropTypes from "prop-types";

function PokemonViewer(props) {
    const statsStyles = {fontWeight: 500, fontSize: "17px", lineHeight: "150%"};

    const stubPokemonInfo = {
        name: "select pokemon",
        sprites: {
            front_default: "",
        },
        moves: [],
        id: "",
        height: "",
        stats: [{}, {base_stat: ""}],
    };

    const [pokemonInfo, setPokemonInfo] = useState(stubPokemonInfo);
    const [isLoaded, setIsLoaded] = useState(null);

    useEffect(() => {
        if (props.selectedPokemon) {
            axios.get(API_URL + props.selectedPokemon).then((response) => {
                setPokemonInfo(response.data);
                setIsLoaded(true);
            }).catch((error) => {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    console.log(error.request);
                }
            });
        }
    }, [props.selectedPokemon]);

    let imgScale = returnImgScale(pokemonInfo.height);

    return (
        <div className={"pokemon-viewer"}>
            <Typography
                sx={{fontWeight: "bold", lineHeight: "100%"}}
                variant={"h3"}
            >
                {isLoaded ? capitalizeFirstLetter(pokemonInfo.name) : "Pokemon"}
            </Typography>
            <div className={"sprite"}>
                {isLoaded ? (
                    <img
                        alt={"pokemon"}
                        src={pokemonInfo.sprites.front_default}
                        height={imgScale}
                    />
                ) : null}
            </div>
            <div className={"stats"}>
                <Typography sx={statsStyles}>
                    {`Снялся в ${pokemonInfo.moves.length} сериях`}
                </Typography>
                <Typography sx={statsStyles}>{`Id: ${pokemonInfo.id}`}</Typography>
                <Typography sx={statsStyles}>
                    {`height: ${pokemonInfo.height}`}
                </Typography>
                <Typography sx={statsStyles}>
                    {`attack: ${pokemonInfo.stats[1].base_stat}`}
                </Typography>
            </div>
        </div>
    );
}

PokemonViewer.propTypes = {
    selectedPokemon: PropTypes.string,
};

export default PokemonViewer;
