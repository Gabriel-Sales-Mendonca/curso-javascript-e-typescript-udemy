import User from '../models/User'

class TokenController {
  async index(req, res) {
    res.json('ok')
  }
}

export default new TokenController()