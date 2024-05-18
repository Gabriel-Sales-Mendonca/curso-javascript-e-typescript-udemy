import Aluno from '../models/Aluno'

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Gabriel',
      sobrenome: 'Sales',
      email: 'gabriel@gmail.com',
      idade: 22,
      peso: 55,
      altura: 1.72
    })
    res.json(novoAluno)
  }
}

export default new HomeController()