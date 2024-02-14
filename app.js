const connectDB = require('./db/connect')
const express = require('express')
const app = express();
//4. import routes
const tasks = require('./routes/tasks');
//11. import dotenv
require('dotenv').config()

//---------------------------MIDDLEWARE-----------------------------
//This converts json into js objects

//serve static values
app.use(express.static('./public'))
app.use(express.json())


//this adds the route
app.use('/api/v1/tasks', tasks)



//2. Define routes in your head:
/*
app.get('/api/v1/tasks')        -get all tasks
app.get('/api/v1/tasks/:id)      -get one task
app.post('/api/v1/tasks')        -create new task
app.patch('/api/v1/tasks/:id')   -update task
app.delete('/api/v1/tasks/:id')  -delete task

*/

const port = 3000
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        //1. setup server
        app.listen(port,()=>{
            console.log(`listening on port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start();