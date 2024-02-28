import React, { useState } from "react";
import User from "../Class/User";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [Testdata, setTest] = useState({
    username: "Test",
    password: "Test1234",
  });
  const handleLogin = async () => {
    if (username == Testdata.username && password == Testdata.password) {
      alert("Login sucessful");
      window.location.href = "/info";
    } else {
      alert("Login failed");
    }
    /*
    try {
      const response = await fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const responseData = await response.json();
      if (responseData.message === "Login successful") {
        console.log("Login successful");
        User.setUsername(username);
        window.location.href = "/info";
        alert(responseData.message);
      } else {
        console.error("Login failed");
        setError(responseData.message);
        alert(responseData.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError(error);
    }*/
  };
  return (
    <div className="container-login">
      <div className="login-container">
        <form>
          <h4 className="text-center mb-4">Login</h4>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <a href="/register">
            <p>Don't have a account</p>
          </a>
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          <button
            type="button"
            className="btn btn-primary float-end"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
