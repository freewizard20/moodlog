import React from "react";
import "./App.css";
import Log from "./components/Log/Log";
import Stat from "./components/Stat/Stat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ButtonAppBar from "./components/Nav/ButtonAppBar";
import SignIn from "./components/Login/SignIn";
import SignUp from "./components/Login/SignUp";

function App() {

  return (
    <Router>
      <div className="App">
        {/* <LoginScreen /> */}
        <ButtonAppBar />
        <Switch>
          <Route path="/" exact component={Log} />
          <Route path="/stat" exact component={Stat} />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/signup" exact component={SignUp} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
