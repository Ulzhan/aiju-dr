
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Home } from './components/Home';
import { GoEat } from './components/GoEat';
import { Web } from './components/Web';
import { Test } from './components/Test';

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
        <Route path="/test/:type">
          <Test />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
