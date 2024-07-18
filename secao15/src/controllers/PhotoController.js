import multer from 'multer'
import multerConfig from '../config/multer'
import Photo from '../models/Photo'
import Aluno from '../models/Aluno'

const upload = multer(multerConfig).single('photo')

class PhotoController {
  store(req, res) {
    return upload(req, res, async (error) => {
      if(error) {
        return res.status(400).json({
          errors: [error.code]
        })
      }

      try {
        const { originalname, filename } = req.file
        const { alunos_id } = req.body

        const aluno  = await Aluno.findByPk(alunos_id)

        if(!aluno) {
          return res.status(400).json({
            errors: ['Aluno não existe.']
          })
        }

        const photo = await Photo.create({ originalname, filename, alunos_id })

        return res.json(photo)

        } catch(e) {
        return res.status(400).json({
          errors: [`Erro ao cadastrar foto na base de dados: ${e}`]
        })
      }
    })
  }
}

export default new PhotoController()
