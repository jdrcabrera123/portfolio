const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    mobile: {
        type: Number,
        require: true
    },
    requirement: {
        type: String,
        require: true
    }
}
)

module.exports = mongoose.model('user', userSchema)