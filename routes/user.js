const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRediectUrl } = require("../middleware.js");
const userController = require("../controllers/user.js");

router
  .route("/signup")
  .get(userController.userSignUp)
  .post(wrapAsync(userController.userSignUpForm));

router
  .route("/login")
  .get(userController.userLogin)
  .post(
    saveRediectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    wrapAsync(userController.userLoginForm)
  );

router.get("/logout", userController.userLogOut);

module.exports = router;
