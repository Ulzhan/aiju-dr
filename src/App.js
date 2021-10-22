
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Home } from './components/Home';
import { GoEat } from './components/GoEat';
import { Web } from './components/Web';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/start/:name/:category/:id/:code">
          <Home />
        </Route>
        <Route path="/goeat/:name/:category">
          <GoEat />
        </Route>
        <Route path="/web/:name/:category">
          <Web />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
