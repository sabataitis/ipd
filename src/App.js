import React from "react";
import {Route, Switch } from "react-router-dom";
import { Navigation } from "./components/Navigation/Navigation";
import "./App.scss";
import {Home} from "./components/Home/Home";
import {About} from "./components/About/About";
import {Projects} from "./components/Projects/Projects";
import {Error} from "./components/Error"

function App() {

  return (
    <main className="main-page">
      <Navigation />
      <Switch >
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/projects" component={Projects} exact />
        <Route component={Error}/>
      </Switch>
    </main>
  );
}

export default App;
