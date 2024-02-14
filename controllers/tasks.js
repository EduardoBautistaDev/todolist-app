//5.create controllers

const getAllTasks = (req,res) => {
    res.send('all items from the file')
}

const createTask = (req,res) => {
    res.json(req.body)
}

const getTask = (req,res) => {
    res.send('get single task')
}

const updateTask = (req,res) => {
    res.send('update task')
}

const deleteTask = (req,res) => {
    res.send('delete task')
}

//7. After setting up controllers, set up postman for testing
//by creating a collection
module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}