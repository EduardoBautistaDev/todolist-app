//13.import schema 
const Task = require('../models/Task')

//5.create controllers
//15. set up logic inside controllers
const getAllTasks = async (req,res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({tasks})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const createTask = async (req,res) => {
    //14. handle errors gracefully
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const getTask = async (req,res) => {
    try {
        //15. get task
        const {id:taskID} = req.params;
        const task = await Task.findOne({_id: taskID})
        if (!task) {
            return res.status(404).json({msg:`No task with id: ${taskID} found`})
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const updateTask = async (req,res) => {
    try {
        const {id:taskID} = req.params;
        const task = await Task.findOneAndUpdate({_id: taskID}, req.body,{
            new:true,
            runValidators:true,
        });
        if (!task) {
            return res.status(404).json({msg:`No task with id: ${taskID} found`})
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const deleteTask = async (req,res) => {
    try {
        //16. delete task
        const {id:taskID} = req.params;
        const task = await Task.findOneAndDelete({_id: taskID})
        if (!task) {
            return res.status(404).json({msg:`No task with id: ${taskID} found`})
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

//7. After setting up controllers, set up postman for testing
//by creating a collection

//8. After making sure that postman works, we setup db
//by installing mongoose
module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}