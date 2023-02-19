const ApiError = require('../error/ApiError')
const {Organization, Organization} = require('../models/models')

class organizationController {
    async create(req, res, next) {
        const {id, name, inn, ogrn} = req.body
        if (!id || !name || !inn || !ogrn) {
            return next(ApiError.badRequest('Некорректные данные'))
        }
        const object = await Organization.create({id, name, inn, ogrn})
        return res.json({object})
    }

    async delete(req, res) {
        const {id} = req.body
        const count = await Organization.destroy({where: {id}})
        return res.json({count})
    }

    async getAll(req, res) {
        const objects = await Organization.findAll();
        return res.json(objects)   
    }

    async getOne(req, res) {
        const {id} = req.params
        const object = await Organization.findOne(
        {
            where: {id}
        });
        return res.json(object)    
    }
}

module.exports = new organizationController();