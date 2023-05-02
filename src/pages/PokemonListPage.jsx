import { useState, useEffect } from "react";
import Web3 from 'web3';

import { PokemonList } from "components/PokemonList/PokemonList";
import { Pagination } from "components/Pagination/Pagination";
import { ModalWindow } from "components/ModalWindow/ModalWindow";
import { AddToMyListCard } from "components/AddToMyListCard/AddToMyListCard";

import { getPokemons, addNewUserPokemon } from "api/api";

export default function PokemonListPage() {
      const [pokemons, setPokemons] = useState([]);
      const [pages, setPages] = useState(1);

      const [isModalOpened, setModalOpened] = useState(false);
      const [currentPokemon, setCurrenPokemon] = useState(pokemons[0]);
      const [web3, setWeb3] = useState(null);
      const toggleModal = () => { setModalOpened(!isModalOpened) };

      useEffect(() => {
        async function fetchData() {
          const data = await getPokemons();
          setPokemons(data);
          const pages = Math.ceil(data.length / 12);
          setPages(pages);
        }
        fetchData();
      }, []);

      function conectWithMetaWallet() {
        // Check if Metamask is installed
        if (typeof window.ethereum !== 'undefined') {
          // Connect to Metamask
          window.ethereum.enable().then(() => {
            const web3 = new Web3(window.ethereum);
            setWeb3(web3);

            //Add new user
            const reqBody = {
              userId: web3.currentProvider.selectedAddress,
              pokemonId: currentPokemon._id,
            }

            addNewUserPokemon(reqBody);

          });
        }
        toggleModal();
      }

      useEffect(() => {
        async function handleConnectWallet() {
          // Check if user is logged into Metamask
          if (web3 && web3.currentProvider && web3.currentProvider.selectedAddress) {
            console.log('User is logged in with address:', web3.currentProvider.selectedAddress);
          } else {
            console.log('User is not logged in to Metamask');
          }
        }
        handleConnectWallet();
        
      }, [web3]);

      const changePage = (page) => {
        console.log(page);
      }

      const getPokemonId = (id) => {
        toggleModal();

        const pokemon = pokemons.find(pokemon => pokemon._id === id)
        setCurrenPokemon(pokemon);
    }

    return (
        <div >
            <PokemonList pokemons={pokemons} onClick={getPokemonId}/>
            <Pagination pages={pages} onChange={(page) => changePage(page)}/>

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