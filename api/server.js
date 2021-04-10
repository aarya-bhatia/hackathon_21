const express = require("express");
const app = express();
const config = require("./config");

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello" });
});

app.get("/search/:q", (req, res) => {
  const q = req.params.q;
  loadRecipes(q)
    .then((data) => {
      const arr = parseData(data);
      console.log(arr);
      res.json(arr);
    })
    .catch((err) => next(err));
});

app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

app.listen(port, () => console.log("Server running on port: " + port));
