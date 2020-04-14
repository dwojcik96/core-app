import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { PrivateRoute } from "./helpers";
import { publicRoutes, privateRoutes } from "./config";
import history from "./history";

const RouterComponent = () => (
  <Router history={history}>
    <Switch>
      {publicRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          component={route.component}
          {...route}
        />
      ))}
      {privateRoutes.map((route) => (
        <PrivateRoute
          key={route.path}
          path={route.path}
          component={route.component}
          {...route}
        />
      ))}
    </Switch>
  </Router>
);

export default RouterComponent;
