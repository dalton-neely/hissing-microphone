const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on('line', input => {
    if(/ss{1,}/.test(input))
        console.log('hiss')
    else
        console.log('no hiss')
    rl.close()
})