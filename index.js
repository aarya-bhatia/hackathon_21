require("dotenv").config();

const app_id = process.env.app_id;
const app_key = process.env.app_key;

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const base_url = "https://api.edamam.com";

app.use(express.json());

function loadRecipes(searchWord) {
  fetch(getSearchURL(searchWord))
    .then((res) => res.json())
    .then((res) => {
      console.log(res.hits[0].label);
    })
    .catch((err) => console.log(err));
}

function getSearchURL(q) {
  return `${base_url}/search?q=${q}&app_id=${app_id}&app_key=${app_key}`;
}

app.get("/", (req, res) => {
  res.json({ message: "Hello" });
});

app.listen(port, () => console.log("Server running on port: " + port));
