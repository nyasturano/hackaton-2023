const ApiError = require('../error/ApiError')
const {Object, Organization} = require('../models/models')

class objectController {
    async create(req, res, next) {
        const {address, type} = req.body
        if (!address || !type) {
            return next(ApiError.badRequest('Некорректные данные'))
        }
        const object = await Object.create({address, type})
        return res.json({object})
    }

    async delete(req, res) {
        const {id} = req.body
        const count = await Object.destroy({where: {id}})
        return res.json({count})
    }

    async getAll(req, res) {
        const objects = await Object.findAll();
        return res.json(objects)   
    }

    async getOne(req, res) {
        const {id} = req.params
        const object = await Object.findOne(
            {
                where: {id}
            });
        const orgs = await Organization.findAll({
            where: {objectId: id}
        });
        return res.json({object, orgs})    
    }
}

module.exports = new objectController();