import React from "react";
import Terminal from "./containers/terminal/Terminal";
import ScoreBoard from "./containers/scoreBoard/ScoreBoard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainLayot from "./hoc/layout/MainLayout";
import SearchPan from "./containers/searchPan/SearchPan";
import NavBar from "./hoc/navBar/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/search">
          <SearchPan />
        </Route>
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
