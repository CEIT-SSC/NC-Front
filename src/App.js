import React from "react";
import Terminal from "./containers/terminal/Terminal";
import ScoreBoard from "./containers/scoreBoard/ScoreBoard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/terminal">
          <Terminal />
        </Route>
        <Route path="/scoreBoard">
          <ScoreBoard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
