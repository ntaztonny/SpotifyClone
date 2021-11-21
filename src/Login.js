import React from "react";
import "./Login.css";
import { loginUrl } from "./spotify";

function Login() {
  return (
    <div className="login">
      <div className="logo">
        <img
          src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
          alt=""
        />
        <p>Welcome to Tonny's Spotify version: Please login in to continue</p>
        <hr />
      </div>

      <a href={loginUrl}> LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
