const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/userThoughts');


module.exports = mongoose.connection;