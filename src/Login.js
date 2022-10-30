import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();
  let [userNameError, setUserNameError] = useState("");
  let [passwordError, setPasswordError] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const validate = () => {
    if (!name) {
      setUserNameError("User name can not be blank");
    } else {
      setUserNameError("");
    }
    if (!password) {
      setPasswordError("password can not be blank");
    } else if (password.length < 8) {
      setPasswordError("password must be at least 8 characters");
    } else {
      setPasswordError("");
    }
    if (userNameError || passwordError) {
      return false;
    }
    return true;
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // avoid page refresh
    let isValid = validate();
    console.log(isValid);
    if (isValid) {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", name, password)
        .then((response) => {
          console.log(response);
          alert("submitted");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="container">
          <h1> Login Page </h1>
          <label htmlFor="uname">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="uname"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <div>{userNameError}</div>

          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div>{passwordError}</div>

          <button type="submit">Login</button>

          <label>
            <input type="checkbox" name="remember" />
            Remember me
          </label>
        </div>
      </form>
    </div>
  );
}
