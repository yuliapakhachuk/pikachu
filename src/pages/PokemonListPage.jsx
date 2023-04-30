import { useState, useEffect } from "react";
import Web3 from 'web3';

import { PokemonList } from "components/PokemonList/PokemonList";
import { Pagination } from "components/Pagination/Pagination";
import { ModalWindow } from "components/ModalWindow/ModalWindow";
import { AddToMyListCard } from "components/AddToMyListCard/AddToMyListCard";

import { getPokemons } from "api/api";

export default function PokemonListPage() {

      const [pokemons, setPokemons] = useState([])
      const [isModalOpened, setModalOpened] = useState(false);
      const [currentPokemon, setCurrenPokemon] = useState(pokemons[0]);
      const [web3, setWeb3] = useState(null);

      useEffect(() => {
        async function fetchData() {
          const data = await getPokemons();
          setPokemons(data);
        }
        fetchData();
      }, []);

      function conectWithMetaWallet() {
                // Check if Metamask is installed
        if (typeof window.ethereum !== 'undefined') {
          // Connect to Metamask provider
          window.ethereum.enable().then(() => {
            // Create a new instance of Web3 with Metamask provider
            const web3 = new Web3(window.ethereum);
            setWeb3(web3);
          });
        }
      }

      useEffect(() => {
        async function handleConnectWallet() {
          // Check if user is logged in to Metamask
          if (web3 && web3.currentProvider && web3.currentProvider.selectedAddress) {
            console.log('User is logged in with address:', web3.currentProvider.selectedAddress);
            // Perform actions with the user's Metamask account
          } else {
            console.log('User is not logged in to Metamask');
          }
        }
        handleConnectWallet();
      }, [web3]);

      
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
                <ModalWindow onClose={toggleModal} >
                    <AddToMyListCard 
                      currentPokemon={currentPokemon} 
                      onAddPokemon={conectWithMetaWallet}/>
                </ModalWindow>
            )}
        </div>
    )
}