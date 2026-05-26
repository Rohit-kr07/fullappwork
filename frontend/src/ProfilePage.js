import React from "react";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#4ECDC4",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "12px",
          width: "400px",
          textAlign: "center",
          boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
        }}
      >
        <h1 style={{ marginBottom: "10px" }}>Profile Page</h1>
        <p style={{ marginBottom: "20px" }}>
          Welcome to your profile!
        </p>

        <button
          onClick={handleLogout}
          
          style={{
            padding: "10px 20px",
            backgroundColor: "blue",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "14px",
          }}alert={"Logged Out Successfully"}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default ProfilePage;
