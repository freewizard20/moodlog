import React, { useState, useEffect } from "react";
import "./LoginScreen.css";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../actions/loginActions";
import Cookies from "universal-cookie";

function LoginScreen() {
  const [value, setValue] = useState("");

  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  const cookies = new Cookies();

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    setValue(cookies.get("login"));
  }, []);

  if (value === "s90909") {
    cookies.set("login", "s90909", {
      path: "/",
      expires: new Date(2021, 12),
    });
    dispatch(login());
    setValue("");
  }

  if (!isLogged) {
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
