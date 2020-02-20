import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import "./reset.css";
import "./App.css";

/* Components */
import Header from "./components/Header";
import CharacterCard from "./components/CharacterCard";
import ComicCard from "./components/ComicCard";
import Footer from "./components/Footer";

/* Containers */
import Comic from "./containers/Comic";
import Comics from "./containers/Comics";
import Favorites from "./containers/Favorites";
import Characters from "./containers/Characters";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Characters />
        </Route>
        <Route exact path="/characters/:id">
          <Comic />
        </Route>
        <Route exact path="/characters">
          <Characters />
        </Route>

        <Route path="/comics">
          <Comics />
        </Route>
        <Route>
          <Favorites path="/favorites" />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
