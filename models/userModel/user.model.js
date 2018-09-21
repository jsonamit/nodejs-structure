const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String
    },
    email: {
        type:String
    },
    city:{
        type:String
    }
});

const user=mongoose.model('User',userSchema);

module.exports = user;