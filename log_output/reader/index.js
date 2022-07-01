const fs = require('fs')


const directory = path.join('/', 'usr', 'src', 'app', 'files')
const filePath = path.join(directory, 'text.txt')

const readGeneratedText = () => {
    
    console.log(fs.readFile(filePath))


    setTimeout(readGeneratedText, 10000)
}

console.log("reader up")
readGeneratedText()