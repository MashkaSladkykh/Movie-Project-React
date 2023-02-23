import {useEffect, useState} from "react";
import {connect} from 'react-redux';

import {selectPopularMovies, selectTopRatedMovies, selectUpcomingMovies, selectSetSearchQuery, selectSerchedMovies} from '../../../store/movies/selectors';
import {setPopularMovies, setTopRatedMovies, setUpcomingMovies, setSearchQuery, searchMovie} from '../../../store/movies/actions';

import {generateApiUrl, generateImageUrl, convertDate} from '../utils';
import Header from "./Header";
import { NavLink } from "react-router-dom";
import Search from "../Search";

const Home = ({popularMovies, topRatedMovies, upcomingMovies, setPopularMovies, setTopRatedMovies, setUpcomingMovies, searchQuery, searshedMovies, searchMovie, setSearchQuery}) => {
  
  useEffect(() => {
    fetch(generateApiUrl('popular'))
      .then(res => res.json())
      .then(data => {
        setPopularMovies(data.results);
        console.log(data, 'data')
      })
  }, [])

  useEffect(() => {
    fetch(generateApiUrl('top_rated'))
      .then(res => res.json())
      .then(data => {
        setTopRatedMovies(data.results);
      })
  }, [])

  useEffect(() => {
    fetch(generateApiUrl('upcoming'))
      .then(res => res.json())
      .then(data => {
        setUpcomingMovies(data.results);
      })
  }, [])

  return (
    <div>
      <Header/>
      <main className="container">
        <div className="intro">
            <h1>Welcome.</h1>
            <p className="desc">Millions of movies, TV shows and people to discover. Explore now.</p>
            <Search/>
        </div>
        <h2>What's popular now?</h2>
        <div className="popular">
          {popularMovies.length === 0 && (
            <div>Empty list</div>
          )}
          {popularMovies.map(popularMovie => (
            <div key={popularMovie.id} className="popular__item">
              <NavLink to={`movieId=${popularMovie.id}`}>
              <img src={generateImageUrl(popularMovie.poster_path)} className="popular__image" alt={popularMovie.original_title}/>
              </NavLink>
              <p className="circle">{popularMovie.vote_average}</p>
              <NavLink to={`movieId=${popularMovie.id}`}>
              <div className="popular__title">{popularMovie.original_title}</div>
              </NavLink>
              <div className="popular__date">{convertDate(popularMovie.release_date)}</div>
            </div>
          ))}
        </div>
        <h2>The top-rated movies</h2>
        <div className="top-rated">
        {topRatedMovies.length === 0 && (
            <div>Empty list</div>
          )}
          {topRatedMovies.map(topRatedMovie => (
            <div key={topRatedMovie.id} className="popular__item">
              <NavLink to={`movieId=${topRatedMovie.id}`}>
              <img src={generateImageUrl(topRatedMovie.poster_path)} className="popular__image" alt={topRatedMovie.original_title}/>
              </NavLink>
              <p className="circle">{topRatedMovie.vote_average}</p>
              <NavLink to={`movieId=${topRatedMovie.id}`}>
              <div className="popular__title">{topRatedMovie.original_title}</div>
              </NavLink>
              <div className="popular__date">{convertDate(topRatedMovie.release_date)}</div>
            </div>
          ))}
        </div>
        <h2>Upcoming movies</h2>
        <div className="upcoming">
        {upcomingMovies.length === 0 && (
            <div>Empty list</div>
          )}
          {upcomingMovies.map(upcomingMovie => (
            <div key={upcomingMovie.id} className="popular__item">
              <NavLink to={`movieId=${upcomingMovie.id}`}>
              <img src={generateImageUrl(upcomingMovie.poster_path)} className="popular__image" alt={upcomingMovie.original_title}/>
              </NavLink>
              <p className="circle">{upcomingMovie.vote_average}</p>
              <NavLink to={`movieId=${upcomingMovie.id}`}>
              <div className="popular__title">{upcomingMovie.original_title}</div>
              </NavLink>
              <div className="popular__date">{convertDate(upcomingMovie.release_date)}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

const mapStateToProps = state => ({
  popularMovies: selectPopularMovies(state),
  topRatedMovies: selectTopRatedMovies(state),
  upcomingMovies: selectUpcomingMovies(state),
  searchQuery: selectSetSearchQuery(state),
  searchedMovieL: selectSerchedMovies(state),
})

const mapDispatchToProps = {
  setPopularMovies,
  setTopRatedMovies,
  setUpcomingMovies,
  setSearchQuery,
  searchMovie,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
