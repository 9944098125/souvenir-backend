const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    // Get user input
    const { username, password, phoneNumber } = req.body;

    // Validate user input
    if (!(password && username && phoneNumber)) {
      res.status(400).send("All inputs are required");
    }

    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await User.findOne({ username });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    //Encrypt user password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    // Create user in our database
    const newUser = new User({
      username,
      password: hash,
      phoneNumber,
    });
    const user = await newUser.save();

    // return new user
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.log(err);
  }
};

const login = async (req, res) => {
  try {
    // Get user input
    const { username, password } = req.body;

    // Validate user input
    if (!(username && password)) {
      res.status(400).send("All inputs are required");
    }
    // Validate if user exist in our database
    const user = await User.findOne({ username });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      // const token = jwt.sign(
      //   { userId: user._id, username },
      //   process.env.JWT_SECRET_KEY
      // );
      // user
      res.status(200).json({ user });
    } else {
      res.status(400).send("Invalid Credentials");
    }
  } catch (err) {
    console.log("error", err);
  }
};

module.exports = { register, login };
