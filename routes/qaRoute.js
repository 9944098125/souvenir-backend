const express = require("express");

const {
  createQA,
  getQA,
  deleteQA,
  updateQA,
} = require("../controllers/qaController");
const router = express.Router();

// CREATE QA FOR OTHER TOOLS
router.post("/createQA", createQA);

// GET QA FOR EACH USER
router.get("/getQA/:userId/:toolId", getQA);

// UPDATE QA BY ID
router.put("/updateQA/:id", updateQA);

// DELETE QA BY ID
router.delete("/deleteQA/:id", deleteQA);

module.exports = router;
