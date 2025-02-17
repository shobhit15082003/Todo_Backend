const mongoose=require('mongoose');

const todoSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            maxLength:100,
        },
        description:{
            type:String,
            required:true,
            maxLength:200,
        },
        createdAt:{
            type:Number,
            required:false,
            default:Date.now,
        },
        updatedAt:{
            type:Number,
            required:false,
            default:Date.now,
        },
        

    }
)
module.exports = mongoose.model("Todo", todoSchema);