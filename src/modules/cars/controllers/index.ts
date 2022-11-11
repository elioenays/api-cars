import { Request, Response } from 'express'
import CarService from '../services'

const carService = new CarService()
export class CarController {
  public async findAll(request: Request, response: Response) {
    const cars = await carService.findAll()

    return response.json(cars)
  }
}
