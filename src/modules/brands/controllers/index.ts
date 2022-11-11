import { Request, Response } from 'express'
import BrandService from '../services'

const brandService = new BrandService()
export default class BrandController {
  public async findAll(request: Request, response: Response) {
    const models = await brandService.findAll()

    return response.json(models)
  }

  public async findOne(request: Request, response: Response) {
    const { id } = request.params
    console.log(id)

    const brand = await brandService.findOne(id)

    return response.json(brand)
  }
}
