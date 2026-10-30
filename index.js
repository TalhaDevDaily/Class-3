const express = require("express");
const app = express();

app.use(express.json());

app.post("/register", (req, res) => {
  const { name, email, password, gender } = req.body;

  const errors = {};

  if (!name) errors.name = `A name is required to proceed`;
  if (!email) errors.email = `Email is required`;
  if (!password) errors.password = `You must key in password`;
  if (!gender) errors.gender = `What is your gender?`;

  if (errors.name || errors.email || errors.password || errors.gender)
    return res.status(400).send(errors);

  console.table(req.body);

  res.status(200).send(`Registered Successfully`);
});

app.listen(8000, () => console.log(`Server is running`));
