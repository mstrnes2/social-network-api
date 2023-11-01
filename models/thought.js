const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
    text: {
        type: String,
        minLength: 15,
        maxLength: 500,
    },
    
})