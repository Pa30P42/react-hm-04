import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Movies from "../pages/movies/Movies";
import Navigation from "./navigation/Navigation";
import OneMovie from "../pages/movies/oneMovie/OneMovie";

const App = () => (
  <>
    <div>
      <Route
        render={(props) => <Navigation {...props} extraPropName="value" />}
      />
    </div>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movies/:id" component={OneMovie} />
        <Route path="/movies" component={Movies} />
        {/* <Route
        path="/about"
        render={(props) => <About {...props} extraPropName="value" />}
      /> */}
      </Switch>
    </div>
  </>
);

export default App;
