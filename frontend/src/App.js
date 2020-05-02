import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Timeline from "./pages/Timeline";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/timeline" component={Timeline} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
