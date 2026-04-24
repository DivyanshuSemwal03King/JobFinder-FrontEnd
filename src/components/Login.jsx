import React from "react";
import Nav from "./ui/Nav";
import Footer from "./ui/Footer";

import { Link } from "react-router-dom"; // optional

function Login() {
  return (
    <div className="page">
   
     <Nav/>
      <div className="container">
        <div className="card-login">
          <div className="icon">📦</div>

          <h1>Welcome Back</h1>
          <p className="subtitle">Login to your account</p>

          <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="john@example.com"
            />

            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
            />

            <div className="row">
              <label className="remember">
                <input type="checkbox" />
                Remember me
              </label>

              <a href="#">Forgot password?</a>
              {/* <Link to="/forgot-password">Forgot password?</Link> */}
            </div>

            <button type="submit">Login</button>
          </form>

          <p className="register-text">
            Don't have an account? 
            <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
      <Footer/>
     
    </div>
  );
}

export default Login;