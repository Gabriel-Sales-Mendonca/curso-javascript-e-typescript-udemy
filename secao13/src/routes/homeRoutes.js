import { Router } from 'express'
import homeController from '../controllers/HomeController'

const router = new Router()

router.get('/', homeController.index)

router.get('/teste', (req, res) => {
  res.send('cheguei')
})

export default router

