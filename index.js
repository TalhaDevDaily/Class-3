const express = require("express");
const app = express();

app.use(express.json());

app.post("/register", (req, res) => {
  const { name, email, password, gender } = req.body;

  let errors = {
    name: "",
    email: "",
    password: "",
    gender: "",
  };

  if (!name) errors.name = "Your name is required.";
  if (!email) errors.email = "Your email is required.";

  console.log(name, email, password, gender);

  res.send("Account registered successfully");
});

// app.get("/", (req, res) => res.send("Hello Unemployed Man"));

app.listen(8000, () => console.log(`Server is running`));
