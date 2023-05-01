import axios from 'axios';

const apiUrl = 'http://localhost:3000/api';

// const apiUrl = "https://white-bat-toga.cyclic.app/api"

export async function getPokemons() {
  try {
    const response = await axios.get(apiUrl + "/pokemons");
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getUserPokemons() {
    try {
      const response = await axios.get(apiUrl + "/userPokemons");
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }


  export async function addUserPokemon(body) {
    console.log("body", body);
    // const {userId, pokemonId, addedAt, evolvedAt} = body;
    const url = apiUrl + '/userPokemons';
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
