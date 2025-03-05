import "./pokemonList.css";
import Pokemon from "../pokemon/Pokemon";
import usePokemonList from "../../hooks/usePokemonList";

function PokemonList() {

    const {pokemonList, setPokemonList} = usePokemonList();
    
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