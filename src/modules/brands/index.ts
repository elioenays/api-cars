import { Router } from 'express'
import BrandController from './controllers'

const brandController = new BrandController()

const brandRoutes = Router()

brandRoutes.get('/', brandController.findAll)
brandRoutes.get('/:id', brandController.findOne)

export default brandRoutes
