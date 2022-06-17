const generateAndPrintString = () => {
    const r = (Math.random() + 1).toString(36).substring(2);
    console.log(r);

    setTimeout(generateAndPrintString, 5000)
}

generateAndPrintString()