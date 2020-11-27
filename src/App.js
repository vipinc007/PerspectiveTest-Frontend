import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Landing from "./Pages/Landing";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Landing} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
