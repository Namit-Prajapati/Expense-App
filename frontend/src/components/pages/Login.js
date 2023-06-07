import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passHandler = (e) => {
    setPass(e.target.value);
  };

  const loginHandler = (e) => {
    e.preventDefault();
    fetch("http://localhost:8001/auth/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: pass,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        if (response.message === "login successful!") {
          navigate("/expenses");
        }
        console.log(response);
      })
      .then((r) => {
        console.log(email, pass);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const registerHandler = (e) => {
    e.preventDefault();
    fetch("http://localhost:8001/auth/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: pass,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        if (response.message === "user added") {
          navigate("/expenses");
        } else if (response.message === "user exists") {
          console.log(response.message);
        }
        console.log(response);
      })
      .then((r) => {
        console.log(email, pass);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container mt-3">
      <h2>Login to Continue...</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            onChange={emailHandler}
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            onChange={passHandler}
            type="password"
            className="form-control"
            name="password"
            id="password"
            minLength={8}
            required
          />
        </div>
        <button onClick={loginHandler} className="btn btn-primary mx-2">
          Login
        </button>
        <button onClick={registerHandler} className="btn btn-primary mx-2">
          Register
        </button>
      </form>
    </div>
  );
};

export default Login;
