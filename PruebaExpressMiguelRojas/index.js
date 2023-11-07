const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
const userRoutes = require("./routes/studentRoutes")
require('dotenv').config()


app.use(express.json())

app.use('/',userRoutes)
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
}).then(()=> console.log('Conexion exitosa a MongoDB')).catch((error) => console.error(error))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/hola', (req, res) => {
  res.send('Hello usuario!')
})
app.get('/adios', (req, res) => {
  res.send('Adios usuario.')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})