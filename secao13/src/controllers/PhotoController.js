import multer from 'multer'
import multerConfig from '../config/multer'
import Photo from '../models/Photo'
//import Aluno from '../models/Aluno'

const upload = multer(multerConfig).single('photo')

class PhotoController {
  store(req, res) {
    return upload(req, res, async (error) => {
      if(error) {
        return res.status(400).json({
          errors: [error.code]
        })
      }

      const { originalname, filename } = req.file
      const { alunos_id } = req.body

      const photo = await Photo.create({ originalname, filename, alunos_id })

      return res.json(photo)
    })
  }
}

export default new PhotoController()
