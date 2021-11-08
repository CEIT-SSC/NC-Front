import React from "react";
import Terminal from "./containers/terminal/Terminal";
import ScoreBoard from "./containers/scoreBoard/ScoreBoard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainLayot from "./hoc/layout/MainLayout";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/terminal">
          <MainLayot>
            <Terminal />
          </MainLayot>
        </Route>
        <Route path="/scoreBoard">
          <ScoreBoard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
