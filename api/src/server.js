const express = require("express");
const app = express();
const config = require("./config");
const model = require("./model");

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello" });
});

app.get("/search/:q", (req, res) => {
  model
    .loadData(req.params.q)
    .then((data) => {
      res.json(model.getRecipes(data));
    })
    .catch((err) => {
      console.log(err);
    });
});

app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

app.listen(config.port, () => {
  console.log("Server running on port: " + config.port);
});
