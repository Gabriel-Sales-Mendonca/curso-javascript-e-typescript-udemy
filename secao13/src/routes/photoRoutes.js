import { Router } from 'express'

import photoController from '../controllers/PhotoController'

const route = new Router()

route.post('/', photoController.store)

export default route