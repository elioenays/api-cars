import mysql from 'mysql2'

export const database = () => {
  const connection = mysql.createConnection({
    host: 'localhost',
    database: 'cars',
    user: 'root',
    password: 'password',
  })

  connection.connect(e => {
    if (e) throw e.message
  })

  return connection
}
