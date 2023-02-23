import {useEffect} from "react";
import {connect} from 'react-redux';

import {selectPopularMovies, selectTopRatedMovies, selectUpcomingMovies, selectMovieDetails, selectMovieCast} from '../../../store/movies/selectors';
import {setPopularMovies, setTopRatedMovies, setUpcomingMovies, setMovieDetails, setMovieCast} from '../../../store/movies/actions';

import {generateApiUrl, generateImageUrl, convertDate, convertMinutes} from '../utils';

import { Link, useLocation} from "react-router-dom";
import Header from "../Home/Header";
import "./style.scss"


const Movie = ({movieDetails, setMovieDetails, movieCast, setMovieCast}) => {
  let location = useLocation();
  let [ , movieId] = location.pathname.split('=');

  useEffect(() => {
    fetch(generateApiUrl(movieId))
      .then(res => res.json())
      .then(data => {
        setMovieDetails(data);
        console.log(data, 'data')
      })
  }, [])

  useEffect(() => {
    fetch(generateApiUrl(`${movieId}/credits`))
      .then(res => res.json())
      .then(data => {
        setMovieCast(data);
        console.log(data, 'data')
      })
  }, [])

return (
  <>
  <Header/>
    <main className="container">
    <div className="details">
      <img className="details__image" src={generateImageUrl(movieDetails.poster_path)} alt={movieDetails.original_title}/>
      <div className = "details__about">
          <p className="details__title">{movieDetails.original_title}</p>
          <span className="details__date">{convertDate(movieDetails.release_date)}</span>
          <p className="details__tagline">{movieDetails.tagline} <span> {convertMinutes(movieDetails.runtime)}</span></p>
          <span className="details__vote">{movieDetails.vote_average}</span>
          <p className="details__title">Overview</p>
          <p className="details__overview">${movieDetails.overview}</p>
      </div>
    </div>
    {/* {movieCast.status_message && movieCast.status_code ? renderErrors({
            status_code: movieCast.status_code,
            status_message: movieCast.status_message
        }) : actors.map(({profile_path, name, character}) => (
            <div class="container popular__item">
                <img class="popular__image" src={generateImageUrl(profile_path)} alt={name}/>
                <p class="popular__title">{name}</p>
                <p class="popular__date">{character}</p>
            </div>))
        } */}
    </main>
    <Link to='/'>Go to the homepage</Link>
  </>
)

}

const mapStateToProps = state => ({
  popularMovies: selectPopularMovies(state),
  topRatedMovies: selectTopRatedMovies(state),
  upcomingMovies: selectUpcomingMovies(state),
  movieDetails: selectMovieDetails(state),
  movieCast: selectMovieCast(state),
})

const mapDispatchToProps = {
  setPopularMovies,
  setTopRatedMovies,
  setUpcomingMovies,
  setMovieDetails,
  setMovieCast
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
