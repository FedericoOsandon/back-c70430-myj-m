const { Router } = require('express')
const SessionsController = require('../../controllers/sessions.controller.js')
const { passportCall } = require('../../middlewares/passportCall.js')
const { authorization } = require('../../middlewares/authorization.middleware.js')

const router = Router()
const {
    register,
    login,
    current
} = new SessionsController()

router.post('/register', register)
router.post('/login', login)
router.get('/current', passportCall('jwt'), authorization('admin'), current)


module.exports = router
