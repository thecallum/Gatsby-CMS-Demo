import React from "react";
import { Switch, Route } from "react-router-dom";

import pageNotFound from "../pages/404";
import Index from "../pages/pages/index";
import Create from "../pages/pages/create";
import Edit from "../pages/pages/edit";

export default ({ match }) => {
    return (
        <Switch>
            <Route path="/pages/" exact component={Index} />
            <Route path="/pages/create/" exact component={Create} />

            <Route path="/pages/:id/" exact component={Edit} />

            <Route path="/" component={pageNotFound}></Route>
        </Switch>
    );
};
