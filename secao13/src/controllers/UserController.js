import User from '../models/User'

class UserController {
  async store(req, res) {
    try {
      const {id, nome, email} = await User.create(req.body)
      return res.json({id, nome, email})
    } catch(e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      })
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] })
      return res.json(users)
    } catch {
      return res.json(null)
    }
  }

  async show(req, res) {
    try {
      const {id, nome, email} = await User.findByPk(req.params.id)
      return res.json({id, nome, email})
    } catch {
      return res.json(null)
    }
  }

  async update(req, res) {
    try {
      if(!req.userId) {
        return res.status(400).json({
          errors: ['ID não enviado.']
        })
      }

      const user = await User.findByPk(req.userId)

      if(!user) {
        return res.status(400).json({
          errors: ['Usuário não existe.']
        })
      }

      const {id, nome, email} = await user.update(req.body)

      return res.json({id, nome, email})
    } catch(e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      })
    }
  }

  async delete(req, res) {
    try {
      if(!req.userId) {
        return res.status(400).json({
          errors: ['ID não enviado.']
        })
      }

      const user = await User.findByPk(req.userId)

      if(!user) {
        return res.status(400).json({
          errors: ['Usuário não existe.']
        })
      }

      await user.destroy()

      return res.json(null)
    } catch(e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      })
    }
  }
}

export default new UserController()