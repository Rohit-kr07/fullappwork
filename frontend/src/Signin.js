import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./Signin.css";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/signin", { email, password })
      .then((result) => {
        console.log(result.data);

        if (result.data === "Login successful") {
          alert("Login Successful");
          navigate("/profilePage");
        } else {
          alert(result.data);
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong");
      });
  };

  return (
    <div className="signin-container">
      <div className="signin-card">
        <h2>Sign In</h2>

        <form onSubmit={handleSubmit}>
          <label>Email:</label>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password:</label>

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Sign In</button>

          <p>
            Don’t have an account?
            <Link to="/Signup"> Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signin;