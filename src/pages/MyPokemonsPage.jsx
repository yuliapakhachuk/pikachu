import { useState, useEffect } from 'react';

import { PokemonList } from 'components/PokemonList/PokemonList';
import { Pagination } from 'components/Pagination/Pagination';
import { ModalWindow } from 'components/ModalWindow/ModalWindow';
import { AddToMyListCard } from 'components/AddToMyListCard/AddToMyListCard';
import { getUserPokemons } from 'api/api';

export default function MyPokemonsPage() {
    const [userPokemons, setUserPokemons] = useState([]);
    const [isModalOpened, setModalOpened] = useState(false);
    const [currentPokemon, setCurrenPokemon] = useState(null);


    useEffect(() => {
        async function fetchData() {
            const data = await getUserPokemons();
            setUserPokemons(data);
        }
        fetchData();
    }, []);

    const toggleModal = () => {
        setModalOpened(!isModalOpened);
    };

    const getPokemonId = id => {
        toggleModal();

        const pokemon = userPokemons.find(e => e._id === id);
        setCurrenPokemon(pokemon);
    };
    console.log(userPokemons);

    return (
        <div>
            { !userPokemons ? 
                "No pokemons" : 
                <PokemonList pokemons={userPokemons} onClick={getPokemonId} /> 
            }
            <Pagination />

            {isModalOpened && (
                <ModalWindow onClose={toggleModal}>
                    <AddToMyListCard currentPokemon={currentPokemon} />
                </ModalWindow>
            )}
        </div>
    );
}
