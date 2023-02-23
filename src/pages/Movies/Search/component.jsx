import {connect} from 'react-redux';

import { useNavigate} from "react-router-dom";

import { generateSearchUrl } from "../utils";

import {selectSetSearchQuery, selectSerchedMovies} from '../../../store/movies/selectors';
import { setSearchQuery, searchMovie} from '../../../store/movies/actions';

const Search = (({setSearchQuery,searchQuery,searchMovie, searchedMovie, selectSetSearchQuery}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(generateSearchUrl(searchQuery))
      .then(res => res.json())
      .then((data) => {
        searchMovie(data)
        console.log(data, '-data from fetch')
      })
  }
  const navigate = useNavigate();
  const goToResults = () => navigate({
    pathname: '/search',
    search: `?${searchQuery}`,
  });

    return(
      <div>
        <form action="/search" className="search">
          <label><input type="text" placeholder="Search for a movie, tv show, person..." onChange={(e)=>setSearchQuery(e.target.value)}/></label>
          <button type="submit" className="search__btn" onClick={(e)=>{handleSubmit(e); goToResults()}}>Search </button>
        </form>
      </div>
    )
})

const mapStateToProps = state => ({
    searchQuery: selectSetSearchQuery(state),
    searchedMovie: selectSerchedMovies(state),
  })
  
  const mapDispatchToProps = {
    setSearchQuery,
    searchMovie,
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Search);
  