import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3'

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDA3OWJhZDEwZWQxODQ1M2Y2MjZkNWFlYTk4YWI3NCIsInN1YiI6IjY0ZTBiNjBkYWFlYzcxMDNmOTk4MDA4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cZ71jAC2kXZRjWif2pQkTYjmwqMcqAvb4d3kK3-HrX8'
  }
};

export const getTrending = async() => {
  const responce = await axios.get('/trending/all/day?language=en-US', options)
  return responce.data
}

export const getMovieDetail = async (movieId) => {
  const responce = await axios.get(`/movie/${movieId}?language=en-US`, options)
  return responce.data
}

export const getMovieInformation = async (movieId,type) => {
  const responce = await axios.get(`/movie/${movieId}/${type}?language=en-US`, options)
  return responce.data
}

export const getSearchMovie = async (value) => {
  const responce = await axios.get(`/search/movie?query=${value}&include_adult=false&language=en-US&page=1`, options)
  return responce.data
}