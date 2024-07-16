const Todo = require('../models/Todo');

exports.getTodo = async(req,res)=>{
    try{
        // const {title,description}=req.body;
        const newTodo=await Todo.find({});
        res.status(200).json({
            success:true,
            data:newTodo,
            message:"Succesfullt shown",
        })
    }
    catch(err) {
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }


}