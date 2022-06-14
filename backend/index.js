const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
const Joi = require("joi");

app.use(cors());
app.use(express.json());

const movieSchema = Joi.object({
  name: Joi.string().required(),
  rating: Joi.string().required(),
  date: Joi.string().required(),
});
app.get("/getMovies", cors(), (req, res) => {
  fs.readFile(__dirname + "/" + "movies.json", "utf8", (err, data) => {
    console.log(data);
    res.end(data);
  });
});
app.post("/validate", (req, res) => {
  const { error, value } = movieSchema.validate(req.body);
  if (error) {
    console.log(error);
    return res.send("invalid response");
  }
  res.send("Validation completed ");
});

app.listen(5000, () => {
  console.log("Server is running");
});
