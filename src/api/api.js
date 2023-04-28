import axios from 'axios';

// const api_key = '74f606ab36fa7bf868ad1de218dc7286';
const baseURL = 'https://pokeapi.co/api/v2/pokemon?limit=12';

const instance = axios.create({
    baseURL,
    // params: { api_key },
});

export const getPokemons= async () => {
    const { data } = await instance.get('trending/movie/week');
    return data.results;
};

// export const searchMovie = async query => {
//     const { data } = await instance.get('search/movie', {
//         params: {
//         query,
//         },
//     });
//     return data.results;
// };

// export const getMovieDetails = async id => {
//     const { data } = await instance.get(`movie/${id}`);
//     return data;
// };

// export const getMovieCredits = async id => {
//     const { data } = await instance.get(`movie/${id}/credits`);
//     return data.cast;
// };

// export const getMovieReviews = async id => {
//     const { data } = await instance.get(`movie/${id}/reviews`);
//     return data.results;
// };