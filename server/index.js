const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const dbConnection = require("./config/dbConnection");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(routes);
dbConnection();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
