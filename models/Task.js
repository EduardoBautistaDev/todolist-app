//12. create model and schema
const mongoose = require('mongoose');

//13.setup validation
const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        maxlength:[20, 'name cannot be more than 20 chars']
    },
    completed:{
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model('Task', TaskSchema);