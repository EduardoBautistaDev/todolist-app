//10.setup dotenv and gitignore
const mongoose = require('mongoose');

//9.connect DB
const connectDB = (url)=>{
    return mongoose.connect(url);
}

module.exports = connectDB;