import React from "react";
import Terminal from "./containers/terminal/Terminal";
import ScoreBoard from "./containers/scoreBoard/ScoreBoard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainLayot from "./hoc/layout/MainLayout";
import SearchPan from "./containers/searchPan/SearchPan";
import SignUp from "./containers/SignUp/SignUp";
import NavBar from "./hoc/navBar/NavBar";
import LogIn from "./containers/LogIn/LogIn";
import store from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Router>
      <Provider store={store}>
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
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
