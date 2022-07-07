const express = require('express')
const app = express()
const config = require('./utils/config')
const http = require('http')
const fs = require('fs')
const path = require('path')
const directory = path.join('/', 'usr', 'src', 'app', 'files')
const filePath = path.join(directory, 'text.txt')

const server = http.createServer(app)

var counter = 0
app.get('/pingpong', (req, res) => {
    counter++
    const output2 = '<p>pong ' + counter + "</p>"
    res.send(output2)
})

server.listen(config.PORT, () => {
  console.log(`Pingpong server running on port ${config.PORT}`)
})
