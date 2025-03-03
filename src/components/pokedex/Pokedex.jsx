import PokemonList from "../pokemonList/PokemonList";
import Search from "../search/Search";
import "./pokedex.css";

function Pokedex() {

    return (
        <div className="pokedex-wrapper">
            <Search />
        </div>
    )
}

export default Pokedex;