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


database.query(
    `UPDATE karyawan
    SET nama = 'Steve Roger', jabatan = 'Captain'
    WHERE id = 8;`,
    function(error, hasil) {
        if (error) throw error

        if (hasil.affectedRows > 0) {
            console.log('berhasil memperbarui '+ hasil.affectedRows + ' baris data ke mysql')
        }
    }
)