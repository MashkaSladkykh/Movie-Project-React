import {Provider} from "react-redux";

import store from './store/configureStore';
import Movies from "./pages/RoutesMovies/component";
import './pages/Movies/index.scss';

const App = () => (
  <Provider store={store}>
      <Movies/>
  </Provider>
);

export default App;
