const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const dbConnection = require("./config/dbConnection");
const cookieParser = require("cookie-parser");
const app = express();
const port = 3000;

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173", // Frontend origin
    credentials: true, // Allow credentials (cookies)
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(routes);
dbConnection();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
