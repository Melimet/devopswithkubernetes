const express = require('express')
const app = express()
const config = require('./utils/config')
const http = require('http')

const server = http.createServer(app)

var counter = 0
app.get('/pingpong', (req, res) => {
    counter++
    res.send('<p>pong ' + counter + "</p>")
})

server.listen(config.PORT, () => {
  console.log(`Pingpong server running on port ${config.PORT}`)
})
