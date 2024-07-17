const Todo = require('../models/Todo');

exports.updateTodo = async(req,res)=>{
    try{
        const {title,description}=req.body;
        const id = req.params.id;
        const updated=await Todo.findOneAndUpdate(
            {_id:id},
            {title,description,updatedAt:Date.now()},{new:true});
        // const newTodo=await Todo.create({title,description});
        res.status(200).json({
            success:true,
            data:updated,
            message:"Updated created",
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