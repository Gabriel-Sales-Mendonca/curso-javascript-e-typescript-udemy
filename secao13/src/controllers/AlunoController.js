import Aluno from '../models/Aluno'

class AlunoController {
  async index(req, res) {

    const alunos = await Aluno.findAll()

    res.json(alunos)
  }

  async show(req, res) {
    try {
      if(!req.params.id) {
        return res.status(401).json({
          errors: ['ID não informado.']
        })
      }

      const aluno = await Aluno.findByPk(req.params.id)

      if(!aluno) {
        return res.status(404).json({
          errors: ['Aluno não existe.']
        })
      }

      return res.json(aluno)
    }catch(e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      })
    }
  }

  async store(req, res) {
    try {

      const aluno = await Aluno.create(req.body)

      const { id, nome, sobrenome, email, idade, peso, altura } = aluno

      return res.json({ id, nome, sobrenome, email, idade, peso, altura })

    }catch(e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      })
    }
  }

  async update(req, res) {
    try {

      if(!req.params.id) {
        return res.status(401).json({
          errors: ['ID não informado.']
        })
      }

      const aluno = await Aluno.findByPk(req.params.id)

      if(!aluno) {
        return res.status(404).json({
          errors: ['Aluno não existe.']
        })
      }

      const alunoAtualizado = await aluno.update(req.body)

      const { id, nome, sobrenome, email, idade, peso, altura } = alunoAtualizado

      return res.json({ id, nome, sobrenome, email, idade, peso, altura })

      }catch(e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      })
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params

      if(!id) {
        return res.status(401).json({
          errors: ['ID não informado.']
        })
      }

      const aluno = await Aluno.findByPk(id)

      if(!aluno) {
        return res.status(404).json({
          errors: ['Aluno não existe.']
        })
      }

      await aluno.destroy()

      return res.json({
        deleted: true
      })

    }catch(e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      })
    }
  }
}

export default new AlunoController()