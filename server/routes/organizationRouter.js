const organizationController = require('../controllers/organizationController')

const Router = require('express')
const router = new Router()

router.get('/:id', organizationController.getOne)
router.post('/', organizationController.create)
router.get('/', organizationController.getAll)
router.delete('/', organizationController.delete)

module.exports = router;