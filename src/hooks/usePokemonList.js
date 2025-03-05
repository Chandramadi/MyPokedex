import { useState, useEffect} from "react";
import axios from "axios";

function usePokemonList() {

    const [pokemonList, setPokemonList] = useState({
        pokeList : [],
        loading : true,
        pokedexUrl : "https://pokeapi.co/api/v2/pokemon",
        prevUrl : "",
        nextUrl : "",
    })

    async function loadPokemonList() {
        try {
            setPokemonList((state)=>
                ({...state, loading:true})
            );
            const response = await axios.get(pokemonList.pokedexUrl);
            
            setPokemonList((state)=>
                ({...state, prevUrl : response.data.previous, nextUrl : response.data.next})
            );

            const pokemonResults = response.data.results; // array of first 20 pokemons
            
            const pokemonPromise = pokemonResults.map((pokemon)=>axios.get(pokemon.url)); // array of 20 pokemon's url

            const pokemonData = await axios.all(pokemonPromise); // array of all the first 20 pokemon's details

            const result = pokemonData.map((pokemon)=>{ // accessing name, id, image, and type data
                const poke = pokemon.data;
                // console.log(poke);
                return {
                    id : poke.id,
                    name : poke.name,
                    image : poke.sprites.other.dream_world.front_default,
                    types : poke.types,
                }
            })

            setPokemonList((state)=>
                ({...state, pokeList : result, loading : false})
            );
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(()=>{
        loadPokemonList();
    },[pokemonList.pokedexUrl]); // on the change of pokedexUrl then reload

    return {pokemonList, setPokemonList};
}

export default usePokemonList;