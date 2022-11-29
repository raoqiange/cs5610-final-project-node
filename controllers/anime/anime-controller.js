import axios from 'axios';

//set api key here
const urlOptionConfigure = (url) => {
    const options = {
        method: 'GET',
        url,
        headers: {
            'X-RapidAPI-Key': 'f4217d42admshde5ce9554a8b855p19eca8jsnb3dacff44411',
            'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com'
        }
    };
    return options;
}

const showRandomAnime = async (req, res) => {

}

const searchAnime = async (req, res) => {
    const {animeTitle} = req.params;
    const url = `https://myanimelist.p.rapidapi.com/search/${animeTitle}/10`;
    const urlOptions = urlOptionConfigure(url);
    const response = await axios.request(urlOptions);
    res.json(response.data);
}

const getAnimeDetails = async (req, res) => {
    const {animeId} = req.params;
    const url = `https://myanimelist.p.rapidapi.com/anime/${animeId}`;
    const urlOptions = urlOptionConfigure(url);
    const response = await axios.request(urlOptions);
    const data = response.data;
    const detail = {
        title: data.title_ov,
        japaneseTitle: data.alternative_titles.japanese,
        picture_url: data.picture_url,
        genres: data.information.genres,
        description: data.synopsis,
        producers: data.information.producers,
        studios: data.information.studios,
        episodes: data.information.episodes,
        status: data.information.status,
        onlineScore: data.statistics.score,
        characters: data.characters
    }
    res.json(detail);
}

export default (app) => {
    app.get('/api/anime/search/:animeTitle', searchAnime);
    app.get('/api/anime/:animeId', getAnimeDetails);
}

