import {Link, Route, Routes} from "react-router-dom";

import Home from '../Movies/Home';
import Movie from '../Movies/MovieDetails'
import {SearchResult}  from "../Movies/Search/SearchResult/component";

const Movies = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path=":movieId" element={<Movie/>}/> 
      <Route path=':search' element={<SearchResult/>}/>

      <Route
        path="*"
        element={
          <main style={{padding: "1rem"}}>
            <p>There's nothing here!</p>
            <Link to="/">Go to homepage</Link>
          </main>
        }
      />
    </Routes>
  )
}

export default Movies;
