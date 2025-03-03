import { Route, Routes } from "react-router-dom";
import Pokedex from "../components/pokedex/Pokedex";
import PokemonList from "../components/pokemonList/PokemonList";
import PokemonDetails from "../components/pokemonDetails/PokemonDetails";

function CustomRoutes() {
    return (
        <Routes>
            <Route 
                path="/" 
                element={
                    <div>
                        <Pokedex />
                        <PokemonList />
                    </div>
                }
            />
            <Route 
                path="/pokemon/:id" 
                element={
                    <div>
                        <PokemonDetails/>
                    </div>
                } 
            />
        </Routes>
    )
}

export default CustomRoutes;