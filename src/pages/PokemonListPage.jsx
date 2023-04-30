import { PokemonList } from "components/PokemonList/PokemonList";
import { Pagination } from "components/Pagination/Pagination";
import { useState, useEffect } from "react";
import { ModalWindow } from "components/ModalWindow/ModalWindow";
import { AddToMyListCard } from "components/AddToMyListCard/AddToMyListCard";
import { getPokemons } from "api/api";

export default function PokemonListPage() {

      const [pokemons, setPokemons] = useState([])
      const [isModalOpened, setModalOpened] = useState(false);
      const [currentPokemon, setCurrenPokemon] = useState(pokemons[0]);
      
      useEffect(() => {
        async function fetchData() {
          const data = await getPokemons();
          setPokemons(data);
        }
        fetchData();
      }, []);
      
      const toggleModal = () => { setModalOpened(!isModalOpened) };

      const getPokemonId = (id) => {
        toggleModal();

        const pok = pokemons.find(e => e._id === id)
        setCurrenPokemon(pok);
    }

    return (
        <div >
            <PokemonList pokemons={pokemons} onClick={getPokemonId}/>
            <Pagination/>

            {isModalOpened && (
                <ModalWindow onClose={toggleModal}>
                    <AddToMyListCard currentPokemon={currentPokemon}/>
                </ModalWindow>
            )}
        </div>
    )
}