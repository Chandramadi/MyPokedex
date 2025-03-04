import axios from "axios";
import { use, useEffect, useState } from "react";
import "./pokemonList.css";
import Pokemon from "../pokemon/Pokemon";

function PokemonList() {

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

    return (
        <div className="pokemonList-wrapper">
            <p>Pokemon List</p>
            <div className="pokemonList-pokemons">
                {
                    (pokemonList.loading) ?  "Loading...." :
                    pokemonList.pokeList.map((p)=> <Pokemon name={p.name} image={p.image} id={p.id} />)
                }
            </div>

            <div className="pokemonList-buttons">
                <button disabled={pokemonList.prevUrl==null} onClick={()=>setPokemonList((state)=>({...state, pokedexUrl : pokemonList.prevUrl}))}>Prev</button>
                <button disabled={pokemonList.nextUrl==null} onClick={()=>setPokemonList((state)=>({...state, pokedexUrl : pokemonList.nextUrl}))}>Next</button>
            </div>
            
        </div>
    )
}

export default PokemonList;