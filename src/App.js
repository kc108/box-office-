import React from "react";
import { Switch, Route } from 'react-router-dom';

function App() {
  return(
    <Switch>
      <Route exact path="/">
        This is the HomePage
      </Route>

      <Route path="/starred">
        This is starred
      </Route>

      <Route>
        This is 404 Page
      </Route>
    </Switch>
  );
};

export default App;
