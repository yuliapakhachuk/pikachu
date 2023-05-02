import { useState, useEffect } from 'react';
import Web3 from 'web3';

import { PokemonList } from 'components/PokemonList/PokemonList';
import { ModalWindow } from 'components/ModalWindow/ModalWindow';
import { AddToMyListCard } from 'components/AddToMyListCard/AddToMyListCard';
import { getUserPokemons, addNewUserPokemon } from 'api/api';

export default function MyPokemonsPage() {
    const [web3, setWeb3] = useState(null);

    const [userPokemons, setUserPokemons] = useState([]);
    const [isModalOpened, setModalOpened] = useState(false);
    const [currentPokemon, setCurrenPokemon] = useState(null);
    const toggleModal = () => {
        setModalOpened(!isModalOpened);
    };

    useEffect(() => {
        if (typeof window.ethereum !== 'undefined') {
            // Connect to Metamask
            window.ethereum.enable().then(() => {
                const web3 = new Web3(window.ethereum);
                setWeb3(web3);
            });
        }
    }, []);

    useEffect(() => {
        async function handleConnectWallet() {
            // Check if user is logged into Metamask
            if (
                web3 &&
                web3.currentProvider &&
                web3.currentProvider.selectedAddress
            ) {
                console.log(
                    'User is logged in with address:',
                    web3.currentProvider.selectedAddress
                );
                const reqBody = {
                    userId: web3.currentProvider.selectedAddress,
                };
                addNewUserPokemon(reqBody);

                async function fetchData() {
                    const data = await getUserPokemons(reqBody.userId);
                    setUserPokemons(data);
                }
                fetchData();
            } else {
                console.log('User is not logged in to Metamask');
            }
        }
        handleConnectWallet();
    }, [web3]);

    const getPokemonId = id => {
        toggleModal();

        const pokemon = userPokemons.find(e => e._id === id);
        setCurrenPokemon(pokemon);
    };

    return (
        <div>
            {!userPokemons ? (
                'No pokemons'
            ) : (
                <PokemonList pokemons={userPokemons} onClick={getPokemonId} />
            )}

            {isModalOpened && (
                <ModalWindow onClose={toggleModal}>
                    <AddToMyListCard currentPokemon={currentPokemon} />
                </ModalWindow>
            )}
        </div>
    );
}
