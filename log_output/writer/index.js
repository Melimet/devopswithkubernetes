const fs = require('fs')



const directory = path.join('/', 'usr', 'src', 'app', 'files')
const filePath = path.join(directory, 'text.txt')

const generateAndPrintString = () => {
    const r = (Math.random() + 1).toString(36).substring(2);
    //console.log(Date.now() + ": " + r);
    
    const input = Date.now() + ": " + r

    input.data.pipe(fs.createWriteStream(filePath))

    setTimeout(generateAndPrintString, 5000)
}

console.log("writer up")
fs.mkdir(directory)
generateAndPrintString()