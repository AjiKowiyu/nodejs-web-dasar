const http = require('http')
const url = require('url')
const mysql = require('mysql')
const port = 3000

const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'belajar-database',
})
database.connect()


// mengkombinasikan antara pembuatan server web dengan penarikan data dari mysql

// membuat server web
http.createServer( function(req, res) {
    switch (req.url) {
        // membuat url
        case '/':
            //jenis konten yang akan tampil di halaman web
            res.writeHead(200, {"Content-Type" : "text/plain"})

            //ambil data dari mysql
            database.query('SELECT * FROM karyawan', function(error, hasil) {
                if (error) throw error

                //membuat sebuah variabel kosong
                //tujuannya adalah untuk menampung data yang ingin ditampilkan dari parameter hasil
                //yang masih berupa data mentah (JSON)
                let datakaryawan = ''

                //looping untuk mengambil objek yang diperlukan saja.
                for (let i = 0; i < hasil.length; i++) {
                    //memasukkan satuan objek ke dalam variabel datakaryawan yang awalnya kosong
                    datakaryawan += hasil[i].nama + ': ' + hasil[i].jabatan + '\n'
                }

                //mengirim variabel datakaryawan yang sudah terisi ke dalam body web
                res.write( datakaryawan )
                
                //respon selesai
                res.end()
            })
        break

        case '/insert':
            res.writeHead(200, {"Content-Type" : "text/plain"})
            database.query(
                `INSERT INTO karyawan
                (nip, nama, jabatan, tanggal_join, agama_id)
                VALUES
                (787878, 'Neymar', 'Wing', '2023-12-19', 2);`,
                function (error, hasil) {
                    if (error) throw error
                    if (hasil.affectedRows > 0) {
                        res.write('berhasil memasukkan '+ hasil.affectedRows + ' baris data ke mysql')
                    }
                    res.end()
                }
            )
        break

        case '/update':
            res.writeHead(200, {"Content-Type" : "text/plain"})
            database.query(
                `UPDATE karyawan
                SET nama = 'Maradona', jabatan = 'Legend Football'
                WHERE id = 13;`,
                function(error, hasil) {
                    if (error) throw error
                    if (hasil.affectedRows > 0) {
                        res.write('berhasil memperbarui '+ hasil.affectedRows + ' baris data ke mysql')
                    }
                    res.end()
                }
            )
        break

        case '/delete':
            res.writeHead(200, {"Content-Type" : "text/plain"})
            database.query(
                `DELETE FROM karyawan WHERE id = 9;`,
                function(error, hasil) {
                    if (error) throw error
                    if (hasil.affectedRows > 0) {
                        res.write('berhasil menghapus '+ hasil.affectedRows + ' baris data ke mysql')
                    } else {
                        res.write('anda sudah pernah hapus data tersebut')
                    }
                    res.end()
                }
            )
        break
        
        default:
            res.writeHead(404, {"Content-Type" : "text/html"})
            res.write('404: not found')
            res.end()
        break
    }
}).listen(port)
console.log('server sudah jalan di localhost:'+port)
