const asyncHandler = require('express-async-handler')


// @desc     get Goals
// @route    GET /api/goals
// @access   private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get Goals'})
})

// @desc     set Goals
// @route    POST /api/goals
// @access   private
const setGoal = asyncHandler(async (req, res) => {
    if (!req.body.text){
        req.status(400)
        throw new Error('Please add a new text field.')
    }
    res.status(200).json({ message: 'Set Goals'})
})

// @desc     update Goals
// @route    PUT /api/goals/:id
// @access   private
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `update goal: ${req.params.id}`})
})

// @desc     delete Goals
// @route    DELETE /api/goals/:id
// @access   private
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `deleted goal: ${req.params.id}`})
})





module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}