import React from "react";
import Terminal from "./containers/terminal/Terminal";
import scoreBoard from "./containers/scoreBoard/scoreBoard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/terminal">
          <Terminal />
        </Route>
        <Route path="/scoreBoard">
          <scoreBoard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
