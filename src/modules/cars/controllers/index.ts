import { CarService } from '../services'

export const CarController = {
  findAll() {
    CarService.findAll()
  },
}
