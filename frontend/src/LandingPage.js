import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div
      style={{
        height: "70px",
        backgroundColor: "#4ECDCE",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 40px",
      }}
    >
      <h2
        style={{
          color: "white",
          fontSize: "22px",
          fontWeight: "bold",
        }}
      >
        MyApp
      </h2>

      <div style={{ display: "flex", gap: "15px" }}>
        <Link to="/signin">
          <button
            style={{
              padding: "8px 18px",
              borderRadius: "6px",
              border: "none",
              backgroundColor: "white",
              color: "#4ECDCE",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Sign In
          </button>
        </Link>

        <Link to="/signup">
          <button
            style={{
              padding: "8px 18px",
              borderRadius: "6px",
              border: "none",
              backgroundColor: "#2c7be5",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
