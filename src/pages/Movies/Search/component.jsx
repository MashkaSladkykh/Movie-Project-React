import {useEffect} from "react";
import {connect} from 'react-redux';

import { Link , useParams} from "react-router-dom";

import { generateSearchUrl } from "../utils";

import {selectSetSearchQuery, selectSerchedMovies} from '../../../store/movies/selectors';
import { setSearchQuery, searchMovie} from '../../../store/movies/actions';

const Search = (({setSearchQuery,searchQuery,searchMovie, searchedMovie, selectSetSearchQuery}) => {
    
    // let { movie } = useParams();
    // let [path, value] = movie.split('=');

   // useEffect(() => {
    //     fetch(generateSearchUrl(selectSetSearchQuery))
    //       .then(res => res.json())
    //       .then(data => {
    //         // setPopularMovies(data.results);
    //         console.log(data, 'data')
    //       })
    //   }, [])



    // // fetch(generateSearchUrl(path))
    // //     .then(res => res.json())
    // //     .then((data) => {
    // //         const root = document.querySelector(selector);
    // //         if (data.status_code && data.status_message) {
    // //             const intro = document.querySelector('.intro');
    // //             intro.style.display = 'none';
    // //             root.innerHTML = renderErrors({
    // //                 status_code: status_code,
    // //                 status_message: status_message
    // //             })
    // //         } if (data.results.length == 0){
    // //             const intro = document.querySelector('.intro');
    // //             intro.style.display = 'none';
    // //             root.innerHTML = renderErrors({
    // //                 status_code: "Sorry",
    // //                 status_message: "We don`t find movie, try one more time"
    // //             })
    // //         }
    // //         else {
    // //             console.log(data)
    // //             const movies = data.results.map(movie => renderSearchedMovie(movie)).join('');
    // //             root.innerHTML = movies;
    // //             const intro = document.querySelector('.intro');
    // //             intro.style.display = 'none';
    // //         }
    // //     }
    // // )
    // return(
    //     <div></div>
    // )


})

const mapStateToProps = state => ({
    searchQuery: selectSetSearchQuery(state),
    searchedMovieL: selectSerchedMovies(state),
  })
  
  const mapDispatchToProps = {
    setSearchQuery,
    searchMovie,
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Search);
  