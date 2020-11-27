import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Landing from "./Pages/Landing";
import Result from "./Pages/Result";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Landing} />
        <Route path="/result/:id" exact={true} component={Result} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
