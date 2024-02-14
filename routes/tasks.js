//3. Implement routes
const express = require('express')
const router = express.Router();
//6. import controllers in the routers
const { getAllTasks,createTask,getTask,updateTask,deleteTask } = require('../controllers/tasks');

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);



module.exports = router;