import { Router } from 'express'
import carsRoutes from '../modules/cars'

const routes = Router()

routes.use('/cars', carsRoutes)

export default routes
