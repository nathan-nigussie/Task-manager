const express=require('express');
const router=express.Router();

const {getAllTasks,createTask,updateTask,deleteTask,getTask}=require('../controller/tasksController')

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)


module.exports=router