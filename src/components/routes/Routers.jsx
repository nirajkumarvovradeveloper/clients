import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
//import Register2 from "../auth/Register2"; // removed by me
import Register3 from "../auth/Register3"; 

const routers = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/register" component={Register3}></Route>
        <Route exact path="/dashboard" component={Dashboard}></Route>
      </Switch>
    </div>
  );
};

export default routers;
// it should handle the entire navigation of ur application.
