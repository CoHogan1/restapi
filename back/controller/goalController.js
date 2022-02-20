const asyncHandler = require('express-async-handler')
// goal model
const Goal = require('../models/goalModel')
// user model
const User = require('../models/userModel')


// @desc     get Goals
// @route    GET /api/goals
// @access   private
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find({user: req.user.id})
    res.status(200).json(goals)
})

// @desc     set Goals
// @route    POST /api/goals
// @access   private
const setGoal = asyncHandler(async (req, res) => {
    if (!req.body.text){
        req.status(400)
        throw new Error('Please add a new text field.')
    }
    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id,
    })
    res.status(200).json(goal)
})

// @desc     update Goals
// @route    PUT /api/goals/:id
// @access   private
const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if (!goal){
        res.status(400)
        throw new Error('goal not found')
    }
    const user = await User.findById(req.user.id)
    // check for user
    if (!user){
        res.status(401)
        throw new Error("User not found")
    }
    // make sure logged in user matches the goal user
    if (goal.user.toString() !== user.id){
        res.status(401)
        throw new Error("User not auth")
    }
    const updatedGoal =  await Goal.findByIdAndUpdate(
        req.params.id, req.body, {new:true})

    res.status(200).json(updatedGoal)
})

// @desc     delete Goals
// @route    DELETE /api/goals/:id
// @access   private
const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if (!goal){
        res.status(400)
        throw new Error('goal not found')
    }
    const user = await User.findById(req.user.id)
    // check for user
    if (!user){
        res.status(401)
        throw new Error("User not found")
    }
    // make sure logged in user matches the goal user
    if (goal.user.toString() !== user.id){
        res.status(401)
        throw new Error("User not auth")
    }
    await goal.remove()

    res.status(200).json({ id: req.params.id})
})





module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}
