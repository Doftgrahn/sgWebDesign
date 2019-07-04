import React, {useState} from "react";

import {Route, Switch} from "react-router-dom";

import LandingPage from "./LandingPage/LandingPage";
import Portfolio from "./Portfolio/Portfolio";
import About from "./About/About";

const PageRouting = () => {
    const [route] = useState([
        {path: "/", exact: true, component: LandingPage},
        {path: "/portfolio", exact: false, component: Portfolio},
        {path: "/about", exact: false, component: About}
    ]);

    const routes = route.map((route, i) => (
        <Route
            key={i}
            exact={route.exact}
            path={route.path}
            component={route.component}
        />
    ));

    return (
        <section>
            <Switch>{routes}</Switch>
        </section>
    );
};

export default PageRouting;
