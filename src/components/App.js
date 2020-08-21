import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Movies from "../pages/movies/Movies";
import Navigation from "./navigation/Navigation";
import OneMovie from "../pages/movies/oneMovie/OneMovie";
import Cast from "../pages/movies/oneMovie/Cast";
import Review from "../pages/movies/oneMovie/Review";

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
        {/* <Route path="/movies/:id/cast" component={Review} /> */}
        {/* <Route
        path="/about"
        render={(props) => <About {...props} extraPropName="value" />}
      /> */}
      </Switch>
    </div>
    <div>
      <Switch>
        <Route path="/movies/:id/cast" component={Cast} />
        <Route path="/movies/:id/reviews" component={Review} />
      </Switch>
    </div>
  </>
);

export default App;
