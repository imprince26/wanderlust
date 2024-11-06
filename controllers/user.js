const User = require("../models/user");

module.exports.userSignUp = (req, res) => {
    res.render("users/signup.ejs");
}

module.exports.userSignUpForm = async (req, res) => {
    try {
      let { username, email, password } = req.body;
      const newUser = new User({ email, username });
      const registeredUser = await User.register(newUser, password);
      req.login(registeredUser, (err) => {
        if (err) {
          return next(err);
        }
        req.flash("success", "Welcome To WanderLust");
        res.redirect("/listing");
      });
      console.log(registeredUser);
    } catch (e) {
      req.flash("error", e.message);
      res.redirect("/listing");
    }
}

module.exports.userLogin = (req, res) => {
    res.render("users/login.ejs");
}

module.exports.userLoginForm = async (req, res) => {
    req.flash("success", "Welcome Back To WanderLust");
    let redirecturl = res.locals.redirecturl || "/listing";
    res.redirect(redirecturl);
}

module.exports.userLogOut = (req, res, next) => {
    req.logOut((err) => {
      if (err) {
        next(err);
      }
      req.flash("success", "You are logged out!");
      res.redirect("/listing");
    });
}