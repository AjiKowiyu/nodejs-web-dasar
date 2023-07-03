const http = require('http')
const port = 3000

http.createServer( function(req, res) {
    switch (req.url) {
        case '/':
            res.writeHead(200, {"Content-Type" : "text/html"})
            res.write(
                `<h1>Selamat datang di web saya</h1>
                <hr>
                <button>
                    <a href="/hubungi-saya">Hubungi saya untuk info lebih lanjut</a>
                </button>`
            )
            res.end()
        break
        
        case '/hubungi-saya':
            res.writeHead(200, {"Content-Type" : "text/html"})
            res.write(
                `<span>nomor telpon:</span> <span>email:</span>
                <hr>
                <span>081293260970</span> <span>ajikowiyu@gmail.com</span>
                <br>
                <button>
                    <a href="/">Kembali ke beranda</a>
                </button>`
            )
            res.end()
        break

        default:
            res.writeHead(404, {"Content-Type" : "text/html"})
            res.write('404: not found')
            res.end()
            break
    }
}).listen(port)

console.log( 'aplikasi siap, buka http://localhost:' + port )