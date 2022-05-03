const http = require('http')
const fs = require('fs')

const delay = (ms) => {
    return new Promise( (res, rej) => {
        setTimeout(() => {
            res()
        }, ms)
    })
}
const readFile = (path) => {
    return new Promise( (res, rej) => {
        fs.readFile(path, (err, data) => {
            err ? rej(err) : res(data)
        })
    })
}

const server1 = http.createServer(async (request, response) => {
    switch (request.url) {
        case '/home': {
            try {
                const data = await readFile('pages/home.html')
                response.write(data)
                response.end()
            } catch (err) {
                response.write('some err')
                response.end()
            }

            break
        }
        case '/about': {
            await delay(3000)
            const data = ('ABOUT')
            response.write(data)
            response.end()
            break
        }
        default: {
            response.write('404 not found')
            response.end()
        }
    }

})

server1.listen(3003)