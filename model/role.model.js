const mongoose = require('mongoose')

const Role = mongoose.model(
    'Role',
    new mongoose.Schema({
        Instructor_Name: String
    })
)

module.exports = Role