const http          = require('http')
const URL           = require('url')
const querystring   = require('querystring')
const port          = 3000


http.createServer( function(req, res) {
    //percobaan via web
    //buka browser, masukkan url http://localhost:3000/profil?nama=aji&pekerjaan=programmer
    let parsequery = URL.parse(req.url).query
    let url_querystring = querystring.parse( parsequery )

    res.writeHead(200, {'Content-Type' : 'text/plain'})
    res.write('nama saya adalah ' + url_querystring.nama + ' pekerjaan saya ' + url_querystring.pekerjaan)
    res.end()

    //percobaan via console
    console.log( req.url )
    console.log( URL.parse(req.url) )
    console.log( URL.parse(req.url).query )
    //buka browser, masukkan url http://localhost:3000/profil?nama=aji
    //lihat hasilnya di console atau terminal
    console.log( querystring.parse( URL.parse(req.url).query ).nama )
}).listen(port)

console.log( 'aplikasi siap, buka http://localhost:' + port )