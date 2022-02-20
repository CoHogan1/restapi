const express = require('express')
const { protect } = require('../middleWare/authMiddleware')

const router = express.Router()

const { getGoals,
    setGoal,
    updateGoal,
    deleteGoal
} = require('../controller/goalController')

router.route('/').get(protect ,getGoals).post(protect, setGoal)

router.route('/:id').delete(protect, deleteGoal).put(protect, updateGoal)

// router.get('/', getGoals)
//
// router.post('/', setGoal)

// router.put('/:id', updateGoals)
//
// router.delete('/:id', deleteGoal)

module.exports = router
