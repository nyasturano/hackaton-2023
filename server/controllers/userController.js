const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User} = require('../models/models')


const generateJwt = (id, login, role) => {
  return jwt.sign(
    {id, login, role}, 
    process.env.SECRET_KEY,
    {expiresIn: '24h'}
  )
}

class userController {

  async registration(req, res, next) {
    const {login, password, role} = req.body
    if (!login || !password) {
      return next(ApiError.badRequest('Некорректный логин или пароль'))
    }
    const candidate = await User.findOne({
      where: {login}
    })
    if (candidate) {
      return next(ApiError.badRequest('Пользователь с таким логином уже существует'))
    }

    const hashPassword = await bcrypt.hash(password, 5)
    const user = await User.create({login, password: hashPassword, password})
    const token = generateJwt(user.id, login, role)
    return res.json({token})

  }

  async login(req, res, next) {
    
    const {login, password} = req.body

    const user = await User.findOne({where: {login}})

    if (!user) {
      return next(ApiError.badRequest('Пользователь не найден'))
    }
    let comparePassword = await bcrypt.compareSync(password, user.password)
    if (!comparePassword) {
      return next(ApiError.internal('Неверный пароль'))
    }

    const token = generateJwt(user.id, login, user.role)
    return res.json({token})
    
  }

  async delete(req, res) {
    
  }


  async check(req, res) {
    const token = generateJwt(req.user.id, req.user.login, req.user.role)
    return res.json({token})
  }
}

module.exports = new userController();