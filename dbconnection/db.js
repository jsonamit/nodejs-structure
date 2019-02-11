const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/MEANstackDB',(err)=>{
    if(!err)
    {
        console.log("connection successfully connected");
    }
    else{
        console.log("connection error"+JSON.stringify(err,undefined,2));
    }
});

require('../models/userModel/user.model');