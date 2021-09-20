import React from "react";
import { Switch, Route } from 'react-router-dom';

// Imported Components
import Nav from "./components/Nav"

// Imported Pages
import Home from "./pages/Home"
import Starred from "./pages/Starred";

function App() {
  return(
  <div>

    <Nav />

    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/starred">
        <Starred />
      </Route>

      <Route>
        <div>
          Not found
        </div>
      </Route>
    </Switch>
  </div>
  );
};

export default App;
