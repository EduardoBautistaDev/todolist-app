//3. Implement routes
const express = require('express')
const router = express.Router();
//6. import controllers in the routers
const { getAllTasks } = require('../controllers/tasks');

router.route('/').get(getAllTasks)

module.exports = router;