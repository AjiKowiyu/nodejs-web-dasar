const http = require('http')
const fs = require('fs')
const port = 3000

http.createServer( function(req, res) {
    switch (req.url) {
        case '/':
            res.writeHead(200, {"Content-Type" : "text/html"})
            fs.createReadStream('./view/index.html').pipe(res)
        break
        
        case '/hubungi-saya':
            res.writeHead(200, {"Content-Type" : "text/html"})
            fs.createReadStream('./view/hubungi-saya.html').pipe(res)
        break

        default:
            res.writeHead(404, {"Content-Type" : "text/html"})
            res.write('404: not found')
            res.end()
            break
    }
}).listen(port)

console.log( 'aplikasi siap, buka http://localhost:' + port )