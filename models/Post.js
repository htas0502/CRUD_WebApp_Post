
// Khai bao mongoose
const mongoose = require('mongoose')
// Khaibao Schema
const Schema = mongoose.Schema

// Tao Model - Khung xuong/ Nen mong cho post 
const postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model('post', postSchema)