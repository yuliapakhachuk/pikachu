import "./PokemonCard.scss"



export function PokemonCard({ pokemon, onClick }) {
    const {name, imageUrl, type, level, id} = pokemon;

    const handleClick = () => {
        onClick(id);
    }

    return (
        <li className="pokemonCard" onClick={handleClick}>
            <ul className="pokemon-details">
                <li className="pokemon-image-frame">
                    <img src={imageUrl} alt={name} className="pokemon-img"/>
                </li>
                <li className="pokemon-name">
                    { name }
                </li>
                <li className="pokemon-type">
                    <span className="pokemon-details__title">Type:</span>  {type}
                </li>
                <li className="pokemon-level">
                    <span className="pokemon-details__title">Level:</span>  {level}
                </li>
            </ul>
        </li>
    )
}