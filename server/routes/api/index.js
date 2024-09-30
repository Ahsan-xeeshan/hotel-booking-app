const express = require("express");
const authRouter = require("./authentication");
const router = express.Router();

router.use("/authentication", authRouter);
module.exports = router;
