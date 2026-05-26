import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Signup.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/register", {
        name,
        email,
        password,
        number,
      })
      .then((result) => {
        console.log("Signup Result:", result.data);
        alert("Signup Successful");
        navigate("/signin");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Create Account</h2>

        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
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
          <label>Mobile Number:</label>
          <input
            type="tel"
            placeholder="Enter Mobile Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
