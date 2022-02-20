const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')


// @desc    register new user
// @route   POST /api/users/
// @saccess public
const registerUser = asyncHandler(async (req, res) => {
    const {name, email, password } = req.body
    // check if they are sent properly
    if (!name || !email || !password){
        res.status(400)
        throw new Error('Please fill in all fields')
    }
    // see if user exists
    const userExists = await User.findOne({email})
    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }
    // hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    // create user in db
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    })
    if (user){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

// @desc    authenticat a user
// @route   POST /api/users/login
// @saccess public
const loginUser = asyncHandler(async (req, res) => {
    res.json({message: 'login user'})
})

// @desc    register new user
// @route   GET /api/users/me
// @saccess public
const getMe = asyncHandler(async (req, res) => {
    res.json({message: 'display data'})
})












module.exports = {
    registerUser,
    loginUser,
    getMe,
}
