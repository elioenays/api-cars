import { Router } from 'express'
import { CarController } from './controllers'

const carsRoutes = Router()
const carController = new CarController()

carsRoutes.get('/', carController.findAll)
carsRoutes.get('/:id', carController.findOne)
carsRoutes.post('/', carController.create)

export default carsRoutes
