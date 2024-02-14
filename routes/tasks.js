//3. Implement routes
const express = require('express')
const router = express.Router();
//controller should go here but we'll add it later

router.route('/').get((req,res)=>{
    console.log(req.body)
    res.send('TASK MANAGER APP')
})

module.exports = router;