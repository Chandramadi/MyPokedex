import PokemonList from "../pokemonList/PokemonList";
import Search from "../search/Search";
import "./pokedex.css";

function Pokedex() {

    return (
        <div className="pokedex-wrapper">
            <h1>MyPokeDex</h1>
            <Search />
            <PokemonList />
        </div>
    )
}

export default Pokedex;