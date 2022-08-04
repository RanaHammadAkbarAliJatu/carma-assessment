import axios from 'axios';
import {URL} from 'Constants';

const key = URL.API_KEY
const BASE_URL = URL.BASE_URL

export const get_details_movie = async (searchText) => {
    try {
        const result = await axios.get(`${BASE_URL}movie/${searchText}?${key}&language=en-US`);
        const { data } = result;
        console.log(result,"result")
        return data;

    } catch ({ response: { status, statusText } }) {

        return { error: status, statusText }; // status request ex: 404 Not Found
    }
};
export const get_with_genres_movie = async (id) => {
    try {
        const result = await axios.get(`${BASE_URL}discover/movie?${key}&language=en-US&page=1&with_genres=${id}`);
        const { data } = result;
        console.log(result,"result")
        return data;

    } catch ({ response: { status, statusText } }) {

        return { error: status, statusText }; // status request ex: 404 Not Found
    }
};
export const get_similar_movie = async (movie_id) => {
    try {
        const result = await axios.get(`${BASE_URL}movie/${movie_id}/similar?${key}&language=en-US&page=1`);
        const { data } = result;
        console.log(result,"get_similar_movie",data)
        return data.results;

    } catch ({ response: { status, statusText } }) {

        return { error: status, statusText }; // status request ex: 404 Not Found
    }
};
export const post_reviews = async (value,movieId) => {
    try {
        const rate = {
            "value": value*2
          }
          const authentication = await axios.get(`${BASE_URL}authentication/guest_session/new?${key}`);
          const {data} = authentication
          console.log(authentication,"authentication")
        const result = await axios.post(`${BASE_URL}movie/${movieId}/rating?${key}&guest_session_id=${data?.guest_session_id}`, rate)
        .then(response =>  {
          const {data} = response
            alert(data?.status_message)
        })
        .catch(error => {
            console.log(error)
        });
    } catch ({ response: { status, statusText } }) {

        return { error: status, statusText }; // status request ex: 404 Not Found
    }
};

export const get_search_movies = async (searchText) => {
    try {
        const result = await axios.get(`${BASE_URL}search/movie?query=${searchText}&${key}&language=en-US&page=1`);
        const { data } = result;
        console.log(result,"result")
        return data;

    } catch ({ response: { status, statusText } }) {

        return { error: status, statusText }; // status request ex: 404 Not Found
    }
};
export const get_popular_movies = async () => {
    try {
        const result = await axios.get(`${BASE_URL}movie/popular?${key}&language=en-US&page=1`);
        const { data } = result;
        console.log(result,"result")
        return data;

    } catch ({ response: { status, statusText } }) {

        return { error: status, statusText }; // status request ex: 404 Not Found
    }
};
export const get_top_rated_movies = async () => {
    try {
        const result = await axios.get(`${BASE_URL}movie/top_rated?${key}&language=en-US&page=1`);
        const { data  } = result;
        return data;

    } catch ({ response: { status, statusText } }) {

        return { error: status, statusText }; // status request ex: 404 Not Found
    }
};
export const get_upcoming_movies = async () => {
    try {
        const result = await axios.get(`${BASE_URL}movie/upcoming?${key}&language=en-US&page=1`);
        const { data } = result;
        return data;

    } catch ({ response: { status, statusText } }) {

        return { error: status, statusText }; // status request ex: 404 Not Found
    }
};