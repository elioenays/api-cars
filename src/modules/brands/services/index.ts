import { database } from '../../../database'

const db = database()

export default class BrandService {
  public async findAll() {
    const models = new Promise((resolve, reject) => {
      db.query('select * from brand', (error, result) => {
        if (error) return reject(error.message)
        return resolve(result)
      })
    })

    return models
  }

  public async findOne(id: string) {
    const brand = new Promise((resolve, reject) => {
      db.query(`select * from brand where id=${id}`, (error, result) => {
        if (error) return reject(error)
        return resolve(result)
      })
    })

    return brand
  }
}
