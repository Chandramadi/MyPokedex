import { Link } from "react-router-dom";
import "./pokemon.css";

function Pokemon({name, image, id}) {

    return(
        <Link to={`/pokemon/${id}`}>
        <div className="pokemon-wrapper">
                <p className="pokemon-names">{name}</p>
                <img src={image} alt={name} className="pokemon-images"/>
        </div>
        </Link>
    )

}

export default Pokemon;