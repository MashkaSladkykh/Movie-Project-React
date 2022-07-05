import {Link, Route, Routes} from "react-router-dom";

import Home from '../Movies/Home';
import Movie from '../Movies/MovieDetails'
import Search  from "../Movies/Search";
import Expenses from '../../routes/Expenses';
import Invoices from '../../routes/Invoices';
import Invoice from '../../routes/Invoices/Invoice';


const MoviesExample = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path=":movieId" element={<Movie/>}/>
      
      <Route path=':search' element={<Search/>}/>

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

export default MoviesExample;
