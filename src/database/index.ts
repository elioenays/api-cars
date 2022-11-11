import mysql from 'mysql2'

export const database = () => {
  const connection = mysql.createConnection({
    host: 'localhost',
    database: 'cars',
    user: 'root',
    password: 'unicatolica',
  })

  connection.connect(e => {
    if (e) throw e.message
    console.log('Database conected')
  })

  return connection
}
