const express = require("express");
const app = express();
const PORT = 3001;

app.get("/", (req, res) => {
  res.send("🚀 Hello from App 1------ — powered by Docker & Ali!");
});

app.listen(PORT, () => {
  console.log(`App 1 running on ${PORT}`);
});
