import "./PokemonList.scss"
import { PokemonCard } from "components/PokemonCard/PokemonCard"

export function PokemonList({ pokemons }) {
    return (
        <ul className="pokemon-list">
            {pokemons.map( pokemon => 
                <PokemonCard pokemon={ pokemon } key={pokemon.id}/>
            )}
        </ul>
    )
}