const objectController = require('../controllers/objectController')
const checkRole = require('../middleware/checkRoleMiddleware')
const Router = require('express')
const router = new Router()

router.post('/registration', objectController.registration)
router.delete('/', objectController.delete)
router.get('/', objectController.getAll)
router.get('/:id', objectController.getOne)

module.exports = router;