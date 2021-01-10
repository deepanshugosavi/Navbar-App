import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./screens/Home";
import Products from "./screens/Products";
import Graphs from "./screens/Graphs";
import User from "./screens/User";

function App(props) {
  return (
    <div className="global__container">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/graphs" component={Graphs} />
        <Route exact path="/user" component={User} />
      </Switch>
    </div>
  );
}

export default App;
