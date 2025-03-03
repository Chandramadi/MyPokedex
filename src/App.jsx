import './App.css'
import Pokedex from './components/pokedex/Pokedex'
import PokemonList from './components/pokemonList/PokemonList'
import CustomRoutes from './routes/CustomRoutes'

function App() {

  return (
    <>
      <h1 className="mypokedex">MyPokeDex</h1>
      <CustomRoutes />
    </>
  )
}

export default App
