const objectController = require('../controllers/objectController')

const Router = require('express')
const router = new Router()

// router.post('/', checkRole('ADMIN'), objectController.registration)
router.get('/:id', objectController.getOne)
router.post('/', objectController.create)
//router.delete('/', checkRole('ADMIN'), objectController.delete)
router.get('/', objectController.getAll)
router.delete('/', objectController.delete)

module.exports = router;