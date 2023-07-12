const http          = require('http')
const URL           = require('url')
const querystring   = require('querystring')
const port          = 3000


http.createServer( function(req, res) {
    //percobaan via console
    console.log( req.url )
    console.log( URL.parse(req.url) )
    console.log( URL.parse(req.url).query )
    //buka browser, masukkan url http://localhost:3000/profil?nama=aji
    //lihat hasilnya di console atau terminal
    console.log( querystring.parse( URL.parse(req.url).query ).nama )
}).listen(port)

console.log( 'aplikasi siap, buka http://localhost:' + port )