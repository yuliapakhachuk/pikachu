import "./AddToMyListCard.scss";

export function AddToMyListCard({ currentPokemon }) {
    const {name, imageUrl, type, level, abilities} = currentPokemon;

    return(
        <div className="add-pokemon" >
            <img src={imageUrl} alt={name} className="add-pokemon-img"/>
            <ul className="add-pokemon-details">
                <li className="add-pokemon-name">
                    { name }
                </li>
                <li className="add-pokemon-type">
                    <span className="add-pokemon-details__title">Type:</span>  {type}
                </li>
                <li className="add-pokemon-level">
                    <span className="add-pokemon-details__title">Level:</span>  {level}
                </li>
                <li className="add-pokemon-abilities">
                    <span className="add-pokemon-details__title">Abilities:</span>  
                    {abilities.join(", ")}
                </li>
                <li>
                    <button className="add-pokemon-btn">
                        Add to My list
                    </button>
                </li>
            </ul>
    </div>

    )

}