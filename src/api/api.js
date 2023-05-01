import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

// const API_URL = "https://white-bat-toga.cyclic.app/api"

export async function getPokemons() {
  try {
    const response = await axios.get(API_URL + "/pokemons");
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getUserPokemons() {
    try {
      const response = await axios.get(API_URL + "/userPokemons");
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }


  export async function addUserPokemon(body) {
    console.log("body", body);
    const url = API_URL + '/userPokemons';
    // const body = {
    //   userId: userId,
    //   pokemonId: pokemonId,
    //   // addedAt: addedAt,
    //   // evolvedAt: evolvedAt
    // };


    await axios.post(url, {
      userId: body.userId,
      pokemonId: body.pokemonId,
    });
  }
