const http          = require('http')
const URL           = require('url')
const querystring   = require('querystring')
const mysql         = require('mysql')
const port          = 3000


// membuat koneksi ke database mysql
const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'belajar-database',
})
database.connect()


http.createServer( function(req, res) {

    let parsequery = URL.parse(req.url).query
    let url_querystring = querystring.parse( parsequery )

    res.writeHead(200, {"Content-Type" : "text/plain"})

    //proses penarikan data dari database
    database.query(`SELECT * FROM karyawan WHERE nama LIKE '%${url_querystring.nama}%'`, function(error, hasil) {
        if (error) throw error
        let datakaryawan = ''
        for (let i = 0; i < hasil.length; i++) {
            datakaryawan += hasil[i].nama + ': ' + hasil[i].jabatan + ' ' + hasil[i].tanggal_join.toLocaleString('id-ID') + '\n'
        }
        if (hasil.length > 0) {
            res.write( datakaryawan )
        } else {
            res.write( 'tidak ada karyawan dengan nama ' + url_querystring.nama )
        }
        res.end()
    })
}).listen(port)

console.log( 'aplikasi siap, buka http://localhost:' + port )