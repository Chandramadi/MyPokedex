import axios from "axios";
import { useEffect, useState } from "react";
import "./pokemonList.css";
import Pokemon from "../pokemon/Pokemon";

function PokemonList() {

    const [pokeList, setPokeList] = useState([]);
    const [loading, isLoading] = useState(true);

    async function loadPokemonList() {
        try {
            const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
            const pokemonResults = response.data.results; // array of first 20 pokemons

            const pokemonPromise = pokemonResults.map((pokemon)=>axios.get(pokemon.url)); // array of 20 pokemon's url

            const pokemonData = await axios.all(pokemonPromise); // array of all the first 20 pokemon's details
            
            const result = pokemonData.map((pokemon)=>{ // accessing name, id, image, and type data
                const poke = pokemon.data;
                return {
                    id : poke.id,
                    name : poke.name,
                    image : poke.sprites.other.dream_world.front_default,
                    types : poke.types,
                }
            })
            console.log(result);
            setPokeList(result);
            isLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(()=>{
        loadPokemonList();
    },[]);

    return (
        <div className="pokemonList-wrapper">
            <p>Pokemon List</p>
            {
                (loading) ?  "Loading...." :
                pokeList.map((p)=> <Pokemon id={p.id} name={p.name} image={p.image} />)
            }
        </div>
    )
}

export default PokemonList;