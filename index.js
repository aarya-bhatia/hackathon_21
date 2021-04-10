const dotenv = require("dotenv");
dotenv.config();

const fetch = require("node-fetch");

const app_id = process.env.app_id;
const app_key = process.env.app_key;

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const base_url = "https://api.edamam.com";

app.use(express.json());

function loadRecipes(searchWord) {
  return new Promise((resolve, reject) => {
    fetch(getSearchURL(searchWord))
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
}

function getSearchURL(q) {
  return `${base_url}/search?q=${q}&app_id=${app_id}&app_key=${app_key}`;
}

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

function parseData(data) {
  let arr = [];
  data.hits.forEach((e) => {
    const recipe = e.recipe;
    const label = recipe.label;
    const image = recipe.image;
    const instructions = recipe.ingredientLines;
    arr = [
      ...arr,
      {
        label,
        image,
        instructions,
      },
    ];
  });
  return arr;
}
