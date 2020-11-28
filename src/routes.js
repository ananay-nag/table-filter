import React from "react";
import { Router, Route, Redirect, Switch } from "react-router-dom";
import { Dashboard } from "./module/index";
import { history } from "./util/history";

class AppRouter extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path={"/"} component={Dashboard} />
          <Route exact path={"/dashboard"} component={Dashboard} />
          <Redirect exact from="*" to="/" />
        </Switch>
      </Router>
    );
  }
}
export default AppRouter;
