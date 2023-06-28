const http = require('http') //memanggil modul http, fitur bawaan node.js

http.createServer( function (request, respon) {
    // pengecekan url yang diminta/direquest oleh client/user
    if (request.url == '/') {
        //respon.writeHead --> membuka akses permintaan / setting header (kode status, tipe konten)
        //respon.write --> isi konten yang akan diberikan/ditampilkan ke client
        //respon.end --> menutup/mengakhirkan proses transfer data yang dibuka oleh header

        respon.writeHead(200, {"Content-Type" : "text/plain"})
        respon.write( 'text ini berasal dari server node.js' )
        respon.end()
    } else if (request.url == '/hubungi-kami') {
        respon.writeHead(200, {"Content-Type" : "text/plain"})
        respon.write( 'silakan hubungi nomor 081293260970 untuk permintaan pengembangan aplikasi web' )
        respon.end()
    } else {
        respon.writeHead(200, {"Content-Type" : "text/plain"})
        respon.write( 'halaman tidak tersedia' )
        respon.end()
    }
}).listen(3000)

console.log( 'server node.js sudah aktif... silakan buka http://localhost:3000' )
