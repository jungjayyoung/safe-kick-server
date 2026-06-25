const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const usersRoutes = require("./routes/users");
const ridesRoutes = require("./routes/rides");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok", message: "Safe Kick server is running" });
});

app.use("/auth", authRoutes);
app.use("/users", usersRoutes);
app.use("/rides", ridesRoutes);

module.exports = app;