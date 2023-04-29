import { NavLink } from 'react-router-dom';
import Logo from "./logo-pokemon.png"
import "./Header.scss"

export function Header({onClick}) {
    return (
        <header className="header">
            <img src={ Logo } alt="pokemons" className="logo" width="154px"/>
            <nav className="navigation">
                <NavLink to="/pokemonlist" className="navLink" >
                    Pokémon List
                </NavLink>
                <NavLink to="/mypokemons" className="navLink" >
                    My pokémons
                </NavLink>
            </nav>
        </header>
    )
}
