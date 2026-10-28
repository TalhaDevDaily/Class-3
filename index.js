const express = require("express");
const app = express();

app.use(express.json());

app.post("/register", (req, res) => {
  const { name, email, password, gender } = req.body;

  let errors = {};

  if (!name) errors.name = "Your name is required.";
  if (!email) errors.email = "Your email is required.";
  if (!password) errors.password = "Password is necessary to proceed";
  if (!gender) errors.gender = "What is your gender?";

  if (errors.name || errors.email || errors.password || errors.gender) {
    return res.send(errors);
  }

  res.send("Account registered successfully");
});

// app.get("/", (req, res) => res.send("Hello Unemployed Man"));

app.listen(8000, () => console.log(`Server is running`));
