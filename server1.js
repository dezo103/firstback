const http = require('http')

let requestsCount = 0


const server1 = http.createServer((request, response)=>{

    requestsCount++

    switch (request.url) {
        case '/students':
            response.write('students')
            break
        case '/':
        case '/courses':
            response.write('course')
            break
        default:
            response.write('404 not found')
    }

    response.write(' IT-KAMASUTRA: ' + requestsCount)
    response.end()
})

server1.listen(3003)