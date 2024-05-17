import { Router } from 'express'

const router = new Router()

router.get('/', (re, res) => {
  res.send('Olá mundo!')
})

export default router

router.get()