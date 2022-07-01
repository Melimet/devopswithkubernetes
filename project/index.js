const express = require('express')
const app = express()
const config = require('./utils/config')
const http = require('http')

const server = http.createServer(app)


app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

server.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`)
})
