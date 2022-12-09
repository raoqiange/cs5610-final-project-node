import axios from 'axios';

//set api key here
const urlOptionConfigure = (url) => {
    const options = {
        method: 'GET',
        url,
        headers: {
            'X-RapidAPI-Key': 'f4217d42admshde5ce9554a8b855p19eca8jsnb3dacff44411',
            'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
        }
    };
    return options;
}

const getAllAnime = async (req, res) => {
    const url = "https://anime-db.p.rapidapi.com/anime";
    const options = urlOptionConfigure(url);
    const urlOptions =
        {...options,
            params: {
                page: '1',
                size: '60',
                sortBy: 'ranking',
                sortOrder: 'asc'
            }};
    const response = await axios.request(urlOptions);
    res.json(response.data.data);
}

const searchAnimeByTitle = async (req, res) => {
    const {animeTitle} = req.params;
    const url = "https://anime-db.p.rapidapi.com/anime";
    const options = urlOptionConfigure(url);
    const urlOptions =
        {...options,
        params: {
            page: '1',
            size: '20',
            search: animeTitle,
            sortBy: 'ranking',
            sortOrder: 'asc'
        }};
    const response = await axios.request(urlOptions);
    res.json(response.data.data);
}

const getAllAnimeGenres = async (req, res) => {
    const url = 'https://anime-db.p.rapidapi.com/genre';
    const urlOptions = urlOptionConfigure(url);
    const response = await axios.request(urlOptions);
    res.json(response.data);
}

const getAnimeByGenre = async (req, res) => {
    const {genre} = req.params;
    const url = "https://anime-db.p.rapidapi.com/anime";
    const options = urlOptionConfigure(url);
    const urlOptions =
        {...options,
            params: {
                page: '1',
                size: '20',
                genres: genre,
                sortBy: 'ranking',
                sortOrder: 'asc'
            }};
    const response = await axios.request(urlOptions);
    res.json(response.data.data);
}

const getAnimeDetails = async (req, res) => {
    const {animeId} = req.params;
    const url = `https://anime-db.p.rapidapi.com/anime/by-id/${animeId}`;
    const urlOptions = urlOptionConfigure(url);
    const response = await axios.request(urlOptions);
    res.json(response.data);
}

export default (app) => {
    app.get('/api/anime/all', getAllAnime);
    app.get('/api/anime/search/:animeTitle', searchAnimeByTitle);
    app.get('/api/anime/genres', getAllAnimeGenres);
    app.get('/api/anime/genres/:animeGenre', getAnimeByGenre);
    app.get('/api/anime/:animeId', getAnimeDetails);
}
