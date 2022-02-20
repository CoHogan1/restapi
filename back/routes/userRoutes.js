const express = require('express')
const router = express.Router()
const { registerUser,
    loginUser,
    getMe
} = require('../controller/userController')

const { protect } = require('../middleWare/authMiddleware')

// api/users/
router.post('/', registerUser)
router.post('/login', loginUser)
// protected
router.get('/me', protect, getMe)

module.exports = router
