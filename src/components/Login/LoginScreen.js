import React, { useState, useEffect } from "react";
import "./LoginScreen.css";

function LoginScreen() {
  const [isLoggedIn, setisLoggedIn] = useState(0);
  const [value, setValue] = useState("");

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  if (value !== "s90909") {
    return (
      <div className="Background">
        <input value={value} onChange={(e) => changeHandler(e)} type="text" />
      </div>
    );
  } else {
    return <></>;
  }
}

export default LoginScreen;
