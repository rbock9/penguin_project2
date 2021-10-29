//////////////////////////////
// Import Dependencies
//////////////////////////////
const express = require("express")
const User = require("../models/user")
const bcrypt = require("bcryptjs")

///////////////////////////////
// Create Router
///////////////////////////////
const router = express.Router();

////////////////////////////
// ROUTES
////////////////////////////

// The Signup Routes (Get => form, Post => form submit)
// "/user/signup"
router.get("/signup", (req, res) => {
    res.render("user/signup.liquid")
})

router.post("/signup", async (req, res) => {
    // encrypt password
    req.body.password = await bcrypt.hash(req.body.password, await bcrypt.genSalt(10))

    // save the user to our database
    User.create(req.body)
    .then((user) => {
        // log the user as a test
        console.log(user)
        // redirect user to login
        res.redirect("/user/login")
    })
    // error handling
    .catch((error) => {
        res.json({error})
    })
})

// The Login Routes (Get => form, Post => form submit)
// "/user/login"
router.get("/login", (req, res) => {
    res.render("user/login.liquid")
})

router.post("/login", async (req, res) => {
    // destructure username and password from req.body
    const { username, password } = req.body;
  
    // search for the user
    User.findOne({ username })
      .then(async (user) => {
        // check if the user exists
        if (user) {
          // compare passwords
          const result = await bcrypt.compare(password, user.password);
          if (result) {
            // store some data in the session object
            req.session.username = username
            req.session.loggedIn = true
            // redirect to gifts index page
            res.redirect("/gifts");
          } else {
            // send error of wrong password
            // res.json({ error: "password doesn't match" });
            res.render("user/incpass.liquid")
          }
        } else {
          //send error that user doesn't exist
          // res.json({ error: "user doesn't exist" });
          res.render("user/incuname.liquid")
        }
      })
      // error handling
      .catch((error) => {
        res.json({ error });
      });
  });

// logout route, get request to /user/logout
router.get("/logout", (req, res) => {
    // destroy the session
    req.session.destroy((err) => {
        // send user back to main page
        res.redirect("/")
    })
})

////////////////////////////////
// export the router
/////////////////////////////////
module.exports = router