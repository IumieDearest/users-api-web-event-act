const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

const users = [
  {
    LastName: "Regis",
    FirstName: "Anna Mae",
    Email: "aregis_ccs@uspf.edu.ph",
    Password: "password123",
  },
  {
    LastName: "Kagioshi",
    FirstName: "Iumie",
    Email: "soniumie@gmail.com",
    Password: "password456",
  },
  {
    LastName: "Ramirez",
    FirstName: "Jin Marko",
    Email: "jinmarko.ramirez@gmail.com",
    Password: "password789",
  },
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/", (req, res) => {
  res.send("API is running. Visit /users to see the list of users.");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
