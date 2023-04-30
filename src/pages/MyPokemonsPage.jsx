import { useState, useEffect } from 'react';
// import Web3 from 'web3';

import { PokemonList } from 'components/PokemonList/PokemonList';
import { Pagination } from 'components/Pagination/Pagination';
import { ModalWindow } from 'components/ModalWindow/ModalWindow';
import { AddToMyListCard } from 'components/AddToMyListCard/AddToMyListCard';
import { getUserPokemons } from 'api/api';

export default function MyPokemonsPage() {
    const [userPokemons, setUserPokemons] = useState([]);
    const [isModalOpened, setModalOpened] = useState(false);
    const [currentPokemon, setCurrenPokemon] = useState(null);

    // const [web3, setWeb3] = useState(null);

    // useEffect(() => {
    //     // Check if Metamask is installed
    //     if (typeof window.ethereum !== 'undefined') {
    //       // Connect to Metamask provider
    //       window.ethereum.enable().then(() => {
    //         // Create a new instance of Web3 with Metamask provider
    //         const web3 = new Web3(window.ethereum);
    //         setWeb3(web3);
    //       });
    //     }
    //   }, []);



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
