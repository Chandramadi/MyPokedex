import { useParams } from "react-router-dom";
import "./pokemonDetails.css";
import usePokemonDetails from "../../hooks/usePokemonDetails";

function PokemonDetails() {
    const {id} = useParams();
    
    const {pokemonDetails} = usePokemonDetails(id);

    return (
        <div className="pokemonDetails-wrapper">
            <img src={pokemonDetails.image} alt={pokemonDetails.name} />
            <h1>{pokemonDetails.name}</h1>
            <p>Height : {pokemonDetails.height}</p>
            <p>Weight : {pokemonDetails.weight}</p>
            <div className="pokemonDetails-types">
                {pokemonDetails.types ? (
                    pokemonDetails.types.map((type, index) => <p key={index}>{type}</p>)
                ) : "Loading..."}
            </div>

        </div>
    )
}

export default PokemonDetails;
