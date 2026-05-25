const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./model/user");

const app = express();

app.use(express.json());
app.use(cors());


// MongoDB Connection
mongoose
  .connect("mongodb://mongo:27017/users")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));


// Test API
app.get("/", (req, res) => {
  res.send("Backend Running Successfully");
});


// Signin Test API
app.get("/signin", (req, res) => {
  res.send("Signin API working");
});


// Get All Users
app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// Register API
app.post("/register", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);

    console.log("Record Inserted");

    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// Login API
app.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.json("User does not exist");
    }

    if (user.password === password) {
      return res.json("Login successful");
    } else {
      return res.json("Incorrect password");
    }
  } catch (err) {
    console.log(err);
    res.status(500).json("Error");
  }
});


// Server Start
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});