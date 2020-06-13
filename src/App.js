import React, { useState } from "react";
import "./App.css";
import Log from "./components/Log/Log";
import Stat from "./components/Stat/Stat";
import LoginScreen from "./components/Login/LoginScreen";
import SimpleBottomNavigation from "./components/Nav/SimpleBottomNavigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ButtonAppBar from "./components/Nav/ButtonAppBar";
import SignIn from "./components/Login/SignIn";
import SignUp from "./components/Login/SignUp";

function App() {
  const [value, setValue] = useState("");

  return (
    <Router>
      <div className="App">
        <LoginScreen />
        <ButtonAppBar />
        <Switch>
          <Route path="/" exact component={Log} />
          <Route path="/stat" exact component={Stat} />
          <Route path="/login" exact component={SignIn} />
          <Route path="/register" exact component={SignUp} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
