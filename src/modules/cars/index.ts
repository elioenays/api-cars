import { Router } from 'express'
import { CarController } from './controllers'

const carsRoutes = Router()
const carController = new CarController()

carsRoutes.get('/', carController.findAll)

export default carsRoutes
