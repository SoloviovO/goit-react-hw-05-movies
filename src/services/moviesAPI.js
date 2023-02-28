import axios from 'axios';

const KEY = '3b8f6a8ecb92c393de5009c015f6a411';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function getPopularMovies() {
  const response = await axios('trending/movie/day', {
    params: { api_key: KEY },
  });
  return response.data.results;
}

export async function getMovieInfo(id) {
  const response = await axios(`/movie/${id}`, {
    params: { api_key: KEY },
  });
  return response.data;
}

export async function getCast(id) {
  const response = await axios(`/movie/${id}/credits`, {
    params: { api_key: KEY },
  });
  return response.data.cast;
}

export async function getReviews(id) {
  const response = await axios(`/movie/${id}/reviews`, {
    params: { api_key: KEY },
  });

  return response.data.results;
}

export async function getSearchMovies(query) {
  const response = await axios('/search/movie', {
    params: { api_key: KEY, query },
  });
  return response.data.results;
}
