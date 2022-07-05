import {Provider} from "react-redux";

import store from './store/configureStore';

// import Todos from './components/TodosRedux';
import Movies from './pages/Movies';
import MoviesExample from "./pages/RoutesMovies/component";

const App = () => (
  <Provider store={store}>
    <div>
      {/* <Movies/> */}
      <MoviesExample/>
    </div>
  </Provider>
);

export default App;
