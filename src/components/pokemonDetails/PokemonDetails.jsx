import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function PokemonDetails() {
    const {id} = useParams();
    const [pokemonDetails, setPokemonDetails] = useState({}); // track the state of the data

    async function loadPokemonDetails() {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

        const data = {
            name : response.data.name,
            height : response.data.height,
            image : response.data.sprites.other.dream_world.front_default,
            weight : response.data.weight,
            types : response.data.types.map((type)=>type.type.name),
        }
        
        setPokemonDetails(data);
    }

    useEffect(()=>{
        loadPokemonDetails();
    },[]);

    return (
        <div>
            <img src={pokemonDetails.image} alt={pokemonDetails.name} />
            <h1>{pokemonDetails.name}</h1>
            <p>Height : {pokemonDetails.height}</p>
            <p>Weight : {pokemonDetails.weight}</p>
            <div>Types:
                {pokemonDetails.types ? (
                    pokemonDetails.types.map((type, index) => <p key={index}>{type}</p>)
                ) : "Loading..."}
            </div>

        </div>
    )
}

export default PokemonDetails;
