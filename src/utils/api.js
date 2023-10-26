import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZGEwNGUwY2YzYzkyMzYxYTA5ZjI3NGEwYWMxODkxNCIsInN1YiI6IjY1MzhmZjhkZjQ5NWVlMDEzYWUxYzI5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Wqmzw0x-JO7C1n9x8FqO3G0psoC0gLsJyZBOIXTl_BY"

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};