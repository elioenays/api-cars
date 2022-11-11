import cors from 'cors'
import express from 'express'
import { database } from './database'

const app = express()

database()

app.use(cors())
app.use(express.json())

app.listen(3333, () => {
  console.log('🚀 Server started on port 3333')
})
