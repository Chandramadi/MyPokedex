import axios from "axios";
import { use, useEffect, useState } from "react";
import "./pokemonList.css";
import Pokemon from "../pokemon/Pokemon";

function PokemonList() {

    const [pokeList, setPokeList] = useState([]);
    const [loading, isLoading] = useState(true);
    const [pokedexUrl, setPokedexUrl] = useState("https://pokeapi.co/api/v2/pokemon");

    const [prevUrl, setPrevUrl] = useState('');
    const [nextUrl, setNextUrl] = useState('');

    async function loadPokemonList() {
        try {
            isLoading(true);
            const response = await axios.get(pokedexUrl);
            
            setPrevUrl(response.data.previous); // set the previous
            setNextUrl(response.data.next); // set the next

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
            setPokeList(result);
            isLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(()=>{
        loadPokemonList();
    },[pokedexUrl]); // on the change of pokedexUrl then reload

    return (
        <div className="pokemonList-wrapper">
            <p>Pokemon List</p>
            <div className="pokemonList-pokemons">
                {
                    (loading) ?  "Loading...." :
                    pokeList.map((p)=> <Pokemon id={p.id} name={p.name} image={p.image} />)
                }
            </div>

            <div className="pokemonList-buttons">
                <button disabled={prevUrl==null} onClick={()=>setPokedexUrl(prevUrl)}>Prev</button>
                <button disabled={nextUrl==null} onClick={()=>setPokedexUrl(nextUrl)}>Next</button>
            </div>
            
        </div>
    )
}

export default PokemonList;