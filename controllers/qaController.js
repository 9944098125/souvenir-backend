const QAmodel = require("../models/QA");

const createQA = async (req, res) => {
    const newQA = new QAmodel(req.body);
    try {
      const savedQA = await newQA.save();
      res.status(200).json(savedQA);
    } catch (err) {
      console.log("create question error: ", err);
    }
}

const getQA = async (req, res) => {
    try {
      const qa = await QAmodel.find({ userId: req.params.userId, toolId:req.params.toolId });
      res.status(200).json(qa);
    } catch (err) {
      console.log("get all questions error: ", err);
    }
}

const updateQA = async (req, res) => {
     try {
        const updatedQA = await QAmodel.findByIdAndUpdate(
            req.params.id,
            {$set:req.body},
            {new: true}
        );
        const savedQA = await updatedQA.save();
        res.status(200).json(savedQA);
    }catch(err) {
        console.log('update question and answer error: ', err);
    }
}

const deleteQA = async (req, res) => {
    try {
        await QAmodel.findByIdAndDelete(req.params.id);
        res.status(200).json({msg:'QA deleted successfully'});
    }catch(err) {
        console.log('Delete qa error: ', err);
    }
}

const deleteAll = async (req, res) => {
  try {
    await QAmodel.deleteMany();
    res.status(200).json({msg:"All the QA's deleted successfully..."})
  }catch(err) {
    console.log('delete error', err)
  }
}

module.exports = {createQA, getQA, updateQA, deleteQA, deleteAll}

/* toolId => 1 = react, 2 = node, 3 = angular, 4 = java, 5 = others */