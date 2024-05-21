import User from '../models/User'

class UserController {
  async index(req, res) {
    const novoUser = await User.create({
      nome: 'Gabriel',
      email: 'gabriel@gmail.com',
      password: '123456'
    })
    res.json(novoUser)
  }
}

export default new UserController()