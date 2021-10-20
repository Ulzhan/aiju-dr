
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Home } from './components/Home';
import { GoEat } from './components/GoEat';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/start/:name/:category/:id/:code">
          <Home />
        </Route>
        <Route path="/goeat">
          <GoEat />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
