const taskUser=require('../models/taskModels')

const getAllTasks=async (req,res) => {
    try {
        const tasks=await taskUser.find({})
        res.status(200).json({tasks})
    } catch(error) {
        res.status(500).json({msg: error})
    }

}

const createTask=async (req,res) => {
    try {
        const task=await taskUser.create(req.body)
        res.status(201).json({task})
    } catch(error) {
        res.status(500).json({msg: error})

    }
}
const getTask=async (req,res) => {
    try {
        const {id: taskID}=req.params
        const task=await taskUser.findOne({_id: taskID})
        if(!task) {
            return res.status(404).json({msg: `No task with id:${taskID}`})
        }
        res.status(200).json({
            task
        })
    } catch(error) {
        res.status(500).json({msg: error})
    }


}


const deleteTask=async (req,res) => {
    try {
        const {id: taskID}=req.params
        const task=await taskUser.findOneAndDelete({_id: taskID})
        if(!task) {
            return res.status(404).json({msg: `No task with id:${taskID}`})
        }
        res.status(200).json({task})

    } catch(error) {
        res.status(500).json({msg: error})
    }
}




const updateTask=async (req,res) => {
    try {
        const {id: taskID}=req.params;
        const task=await taskUser.findByIdAndUpdate({_id: taskID},req.body,{
            new: true,runValidators: true
        })

        if(!task) {
            return res.status(404).json({msg: `No task with id:${taskID}`})
        }
        // res.status(200).json(`Task with Id:${taskID} is updated `)
        res.status(200).json({task})
    } catch(error) {
        res.status(500).json({msg: error})
    }

}


module.exports={
    getAllTasks,
    createTask,
    deleteTask,
    updateTask,
    getTask
}