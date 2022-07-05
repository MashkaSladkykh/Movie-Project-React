import {SET_POPULAR_MOVIES, SET_TOP_RATED_MOVIES, SET_UPCOMING_MOVIES, SET_MOVIE_DETAILS, SET_MOVIE_CAST, SET_SEARCH_QUERY, SEARCHED_MOVIES} from './types';

export const setPopularMovies = payload => ({
  type: SET_POPULAR_MOVIES,
  payload,
})

export const setTopRatedMovies = payload => ({
  type: SET_TOP_RATED_MOVIES,
  payload,
})

export const setUpcomingMovies = payload => ({
  type: SET_UPCOMING_MOVIES,
  payload,
})

export const setMovieDetails = payload => ({
  type: SET_MOVIE_DETAILS,
  payload,
})

export const setMovieCast = payload => ({
  type: SET_MOVIE_CAST,
  payload,
})

export const setSearchQuery = payload => ({
  type: SET_SEARCH_QUERY,
  payload,
})

export const searchMovie = payload => ({
  type: SEARCHED_MOVIES,
  payload,
})