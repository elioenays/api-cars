import { Router } from 'express'
import brandRoutes from '../modules/brands'
import carsRoutes from '../modules/cars'

const routes = Router()

routes.use('/cars', carsRoutes)
routes.use('/brands', brandRoutes)

export default routes
