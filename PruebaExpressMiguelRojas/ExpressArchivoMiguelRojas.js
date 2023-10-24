const express = require('express')
const app = express()
const port = 3000

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