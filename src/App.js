import React from "react";
import { Switch, Route } from 'react-router-dom';


// Imported Pages
import Home from "./pages/Home"
import Show from "./pages/Show";
import Starred from "./pages/Starred";

function App() {
  return(
  <div>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/starred">
        <Starred />
      </Route>

      <Route exact path="/show/:id" >
        <Show />
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
