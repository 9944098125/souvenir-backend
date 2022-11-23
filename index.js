require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const qaRoute = require("./routes/qaRoute");
const authRoute = require("./routes/auth");

const app = express();

app.use(express.json());
app.use(cors());

const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://srinivas:thisisasecret@cluster0.pll6b.mongodb.net/questions_answers"
    );
    console.log("Successfully connected to MongoDB");
  } catch (err) {
    throw err;
  }
};

app.use("/api/auth/", authRoute);
app.use("/api/qa/", qaRoute);

const port = process.env.PORT || 5003;

app.listen(port, () => {
  connect();
  console.log(`App is now running on port ${port}`);
});
