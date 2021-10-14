const express = require("express");
const app = express();
const faker = require("faker");
const bodyParser = require("body-parser");
const cors = require("cors");
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
// allow CORS
app.use(cors({}));
app.get("/", (req, res) => {
  res.send("Hello world");
});

const users = Array.from({ length: 5 }, (_, i) => ({
  id: i.toString(),
  name: faker.name.findName(),
  email: faker.internet.email(),
  address: faker.address.streetAddress(),
  country: faker.address.country(),
  company: faker.company.companyName(),
}));

app.get("/api/users", (req, res) => {
  res.send(users);
});

app.get("/api/users/:id", (req, res) => {
  res.send(users.find((user) => user.id === req.params.id));
});

app.post("/api/users", (req, res) => {
  console.log(req.body);
  const user = req.body;
  user.id = users.length;
  users.push(user);
  res.send();
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}`));
