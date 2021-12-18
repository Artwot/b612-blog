const router = require("express").Router();
const User = require("../models/Users");
const bcrypt = require("bcrypt");

// REGISTER USER
router.post("/register", async (req, res) => {
  try {
    // Bcrypt password generate
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (e) {
    res.status(500).json(e);
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    // Search the user in the DB
    const user = await User.findOne({ username: req.body.username });
    // if it doesn't exits return a message
    if (!user) {
      res.status(400).json("Wrong credentials!");
    }

    const validated = await bcrypt.compare(req.body.password, user.password);
    if (!validated) {
      res.status(400).json("Wrong credentials!");
    }

    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
