import { Request, Response } from 'express'
import CarService from '../services'

const carService = new CarService()
export class CarController {
  public async findAll(request: Request, response: Response) {
    const cars = await carService.findAll()

    return response.json(cars)
  }

  public async findOne(request: Request, response: Response) {
    const { id } = request.params

    const car = await carService.findOne(id)

    return response.json(car)
  }

  public async create(request: Request, response: Response) {
    const { model, licence_plate } = request.body

    const car = await carService.create(model, licence_plate)

    return response.json(car)
  }
}
