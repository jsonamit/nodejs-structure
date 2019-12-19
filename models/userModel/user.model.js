const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    product: {
        type: String,
    },
});

const users=mongoose.model('users',userSchema);

module.exports = users;
