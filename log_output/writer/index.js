const express = require('express')
const app = express()
const config = require('./utils/config')
const http = require('http')

const fs = require('fs')

const path = require('path')

const server = http.createServer(app)


const directory = path.join('/', 'usr', 'src', 'app', 'files')
const filePath = path.join(directory, 'text.txt')



app.get('/writer', (req, res) => {
    const r = (Math.random() + 1).toString(36).substring(2);
    //console.log(Date.now() + ": " + r);
    
    const timeAndString = Date.now() + ": " + r

    //input.data.pipe(fs.createWriteStream(filePath))

    res.send(timeAndString)
}

console.log("writer up")
//fs.mkdir(directory)
//generateAndPrintString()