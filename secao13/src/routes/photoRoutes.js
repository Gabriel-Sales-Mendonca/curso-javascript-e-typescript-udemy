import { Router } from 'express'
import multer from 'multer'

import photoController from '../controllers/PhotoController'
import multerConfig from '../config/multer'

const route = new Router()

const upload = multer(multerConfig)

route.post('/', upload.single('photo'), photoController.store)

export default route