import axios from "axios";
import { useEffect, useState } from "react";

function usePokemonDetails(id) {
    const [pokemonDetails, setPokemonDetails] = useState({}); // track the state of the data

    async function loadPokemonDetails() {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        // console.log(response.data);
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

    return {pokemonDetails};
}

export default usePokemonDetails;