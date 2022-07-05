import {SET_POPULAR_MOVIES, SET_TOP_RATED_MOVIES, SET_UPCOMING_MOVIES, SET_MOVIE_DETAILS, SET_MOVIE_CAST, SET_SEARCH_QUERY, SEARCHED_MOVIES} from './types';

const initialState = {
  searchQuery:'',
  popularMovies: [],
  topRatedMovies: [],
  upcomingMovies: [],
  movieDetails: {},
  movieCast: {},
  searchedMovies:[],
};

export const movies = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      }
      case SEARCHED_MOVIES:
        return {
          ...state,
          searchedMovies: [...action.payload],
        }
    case SET_POPULAR_MOVIES:
      return {
        ...state,
        popularMovies: [...action.payload],
      }
      case SET_TOP_RATED_MOVIES:
      return {
        ...state,
        topRatedMovies: [...action.payload],
      }
      case SET_UPCOMING_MOVIES:
      return {
        ...state,
        upcomingMovies: [...action.payload],
      }
      case SET_MOVIE_DETAILS:
        return{
          ...state,
          movieDetails: action.payload,
        }
      case SET_MOVIE_CAST:
      return{
        ...state,
        movieCast: action.payload,
      }
    default:
      return state;
  }
}
