import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./Route/privateRoute";
import Landing from "./Pages/Landing";
import Dashboard from "./Pages/Dashboard";
import NotFound from "./Pages/NotFound";
import Utils from "./Common/Utils";

function App() {
  React.useEffect(() => {
    Utils.enableFeatherPlugin();
  });
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Landing} />
        {/* <Route path="/login" exact={true} component={Landing} /> */}
        {/* <PrivateRoute path="/dashboard" exact component={Dashboard} /> */}
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
