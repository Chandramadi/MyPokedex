import { Link } from "react-router-dom";
import "./pokemon.css";

function Pokemon({name, image, id}) {

    return(
        <div className="pokemon-wrapper">
            <Link to={`/pokemon/${id}`}>
                <p className="pokemon-names">{name}</p>
                <img src={image} alt={name} className="pokemon-images"/>
            </Link>
        </div>
    )

}

export default Pokemon;