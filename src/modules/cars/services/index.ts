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
    const car = new Promise((resolve, reject) => {
      db.query(`select * from car where id=${id}`, (error, result) => {
        if (error) return reject(error)
        return resolve(result)
      })
    })

    return car
  }

  public async create(model: string, licence_plate: string) {
    const car = new Promise((resolve, reject) => {
      db.query(
        `INSERT INTO cars.car
(model, license_plate)
VALUES(?, ?);`,
        [model, licence_plate],
        (error, result) => {
          if (error) return reject(error)
          return resolve(result)
        },
      )
    })

    return car
  }
}
