
// Khai bao express
const express = require('express')
// Khai bao router
const router = express.Router()

// Load Model
const Post = require('../models/Post')

// Test Router:
router.get('/', (req, res) => {
    // res.send tra ve 1 thong diep
    res.send('Day la Router Post!')
})

module.exports = router