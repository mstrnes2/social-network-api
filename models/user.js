const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String, 
        require: true
    },
    email: {
        type: String, 
        require: true,
        unique: true,
    },
    thoughts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Thought',
        },
    ],
    friends: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
});

module.exports = mongoose.model('User', userSchema);