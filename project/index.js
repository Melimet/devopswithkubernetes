const express = require('express')
const app = express()
const config = require('./utils/config')
const http = require('http')
const path = require('path')
const fs = require('fs')


const directory = path.join('/', 'usr', 'src', 'app', 'files')
const filePath = path.join(directory, 'image.jpg')

const server = http.createServer(app)
const pirkka =  `<img src="https://picsum.photos/1200" alt="img of the day">

<form id="frm1" action="/action_page.php">
First name: <input type="text" name="fname"><br>
<input type="button" onclick="myFunction()" value="Submit">
</form>

<ul>
<li>First todo</li>
<li>2nd todo</li>
<li>3rd todo</li>
</ul>` 

app.get('/', (req, res) => {
  res.send(pirkka)
})

server.listen(config.PORT, () => {
  console.log(`Crudapp server running on port ${config.PORT}`)
})



