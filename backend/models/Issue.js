const mongoose = require('mongoose');

const IssueSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Issue', IssueSchema);
