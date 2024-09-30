const express = require("express");
const {
  registrationController,
  signInController,
  logoutController,
} = require("../../controllers/authenticationController");
const { check } = require("express-validator");
const verifyToken = require("../../middleware/verifyToken");
const router = express.Router();

router.post(
  "/register",
  [
    check("firstName", "First Name is required").notEmpty(),
    check("lastName", "Last Name is required").notEmpty(),
    check("email", "Email is required").isEmail(),
    check("password", "Password with 6 or more characters required").isLength({
      min: 6,
    }),
  ],
  registrationController
);
router.post(
  "/login",
  [
    check("email", "Email is required").isEmail(),
    check("password", "Password with 6 or more characters required").isLength({
      min: 6,
    }),
  ],
  signInController
);

router.post("/logout", logoutController);

router.get("/validate-token", verifyToken, (req, res) => {
  res.status(200).send({ userId: req.userId });
});

module.exports = router;
