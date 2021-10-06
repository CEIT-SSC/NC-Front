import React from "react";
import Terminal from "./containers/terminal/Terminal";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/terminal">
          <Terminal />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
