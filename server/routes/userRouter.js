const userController = require('../controllers/userController')
const checkRole = require('../middleware/checkRoleMiddleware')

const Router = require('express')
const router = new Router()

router.post('/registration', checkRole('ADMIN'), userController.registration)
router.post('/login', userController.login)
router.delete('', checkRole('ADMIN'), userController.delete)

module.exports = router;