import React from "react";
import "./App.css";
import Log from "./components/Log/Log";
import Stat from "./components/Stat/Stat";
import SimpleBottomNavigation from "./components/SimpleBottomNavigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const today = new Date().toDateString();

function App() {
  return (
    <Router>
      <div className="App">
        <h3>{today}</h3>
        <Switch>
          <Route path="/" exact component={Log} />
          <Route path="/stat/" exact component={Stat} />
        </Switch>
        <SimpleBottomNavigation />
      </div>
    </Router>
  );
}

export default App;
