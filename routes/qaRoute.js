const express = require("express");

const {
  createQA,
  getQA,
  updatedQA,
  deleteQA,
  updateQA,
  deleteAll,
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

// delete all
router.delete("/deleteAll", deleteAll);

module.exports = router;
