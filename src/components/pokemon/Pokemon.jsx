import "./pokemon.css";

function Pokemon({id,name, image}) {

    return(
        <div className="pokemon-wrapper">
            <p className="pokemon-names">{name}</p>
            <img src={image} alt={name} className="pokemon-images"/>
        </div>
    )

}

export default Pokemon;