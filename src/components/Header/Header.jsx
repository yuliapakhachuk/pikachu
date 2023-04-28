import "./Header.scss"
import Logo from "./logo-pokemon.png"

export function Header() {
    return (
        <header className="header">
            <img src={ Logo } alt="pokemons" className="logo" width="154px"/>
            <nav className="navigation">
                <a href="/pokemonlist">Pokémon List</a>
                <a href="/mypokemons">My pokémons</a>
            </nav>
        </header>
    )
}