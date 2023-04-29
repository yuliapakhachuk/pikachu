import { useState } from "react";
import { ModalWindow } from "../ModalWindow/ModalWindow";
import "./PokemonCard.scss"

export function PokemonCard({ pokemon }) {
    const {name, imageUrl, type, level} = pokemon;
    const [isModalOpened, setModalOpened] = useState(false);
    const toggleModal = () => { setModalOpened(!isModalOpened) };

    return (
        <li className="pokemonCard" onClick={toggleModal}>
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
            {isModalOpened && (
                <ModalWindow onClose={toggleModal}>
                    Modal
                    {/* <img
                        src={}
                        alt={}
                    /> */}
                </ModalWindow>
            )}
        </li>
    )
}