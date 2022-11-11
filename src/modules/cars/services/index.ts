import { database } from '../../../database'

const db = database()

export default class CarService {
  public async findAll() {
    const cars = new Promise((resolve, reject) => {
      db.query('select * from car', (error, result) => {
        if (error) return reject(error)
        return resolve(result)
      })
    })

    return cars
  }

  public async findOne(id: string) {
    const brand = new Promise((resolve, reject) => {
      db.query(`select * from car where id=${id}`, (error, result) => {
        if (error) return reject(error)
        return resolve(result)
      })
    })

    return brand
  }
}
