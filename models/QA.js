const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;


const qaSchema = new mongoose.Schema({
    question:{
        type:String,
        required:true,
    },
    answer:{
        type:String,
        required:true,
    },
    userId:{
        type:ObjectId,
        ref:'User',
    },
    toolId: {
        type:String,
        required:true
    }
}, {timestamps:true});

const QAmodel = mongoose.model('QAmodel', qaSchema);

module.exports = QAmodel