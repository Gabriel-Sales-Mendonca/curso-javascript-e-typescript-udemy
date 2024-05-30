import { Router } from 'express'
import alunoController from '../controllers/AlunoController'

const route = new Router()

route.get('/', alunoController.index)
route.get('/:id', alunoController.show)
route.post('/', alunoController.store)
route.put('/:id', alunoController.update)
route.delete('/:id', alunoController.delete)

export default route