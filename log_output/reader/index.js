const express = require('express')
const app = express()
const config = require('./utils/config')
const http = require('http')
const server = http.createServer(app)


const fs = require('fs')

const path = require('path')
const directory = path.join('/', 'usr', 'src', 'app', 'files')
const filePath = path.join(directory, 'text.txt')

const readGeneratedText = () => {
    
    //console.log(fs.readFile(filePath))


    setTimeout(readGeneratedText, 10000)
}


app.get('/reader', (req, res) => {
    res.send("reader response")
})

console.log("reader up")
//readGeneratedText()
server.listen(config.PORT, () => {
    console.log(`Reader server up on port ${config.PORT}`)
})