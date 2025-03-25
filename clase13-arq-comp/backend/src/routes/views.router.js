const { Router } = require('express')
const ViewsController = require('../controllers/views.contrellers.js')

const router = Router()
const {
    home,
    login,
    register
 }  = new ViewsController()
router.get('/', home)
router.get('/login', login)
router.get('/register', register)

module.exports = router