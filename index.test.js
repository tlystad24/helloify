const chalk = require('chalk')
// Import module 'index'
const helloify = require('./index')
console.log(helloify('Tobias'))

// Compare two inputs
let testEqual = (I, O) => {
    let index = 1
    if (I === O) return chalk.green(`Test ${index.toString()} passed`)
    else 
        return chalk.red('Test did not pass')
}

console.log(testEqual(helloify('Tobias'), 'Hello Tobias'))