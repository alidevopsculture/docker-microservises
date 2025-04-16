const express = require("express");
const app = express();
const PORT = 3002;

app.get("/", (req, res) => {
  res.send("🔥 Welcome to App 2 — deployed by the DevOps Boss Ali!");
});

app.listen(PORT, () => {
  console.log(`App 2 running on ${PORT}`);
});
