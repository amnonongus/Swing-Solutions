const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        // required: true,
        // unique: true,
        // lowercase: true, 
        // trim: true,
        // minlength: 4
    },  
//     password: {
//         type: String,
//         required: true,
//         trim: true,
//         minlength: 5
//     },
//     email: String,
//     bio: String,
//     avatar: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;