import React from "react";
import Terminal from "./terminal/Terminal";
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
    <div>
      <Router>
        <div>
          <Switch>
            <Route path="/terminal">
              <Terminal />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
