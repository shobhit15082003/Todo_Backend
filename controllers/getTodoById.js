const Todo = require('../models/Todo');

exports.getTodoById = async(req,res)=>{
    try{
        // // const {title,description}=req.body;
        // const newTodo=await Todo.find({});
        const id = req.params.id;
        const todo=await Todo.findById({_id:id});
        if(!todo){
            res.status(500).json({
                success:false,
                message:'Not found',
            })
        }
        res.status(200).json({
            success:true,
            data:todo,
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