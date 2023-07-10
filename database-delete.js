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
    `DELETE FROM karyawan WHERE id = 9;`,
    function(error, hasil) {
        if (error) throw error

        if (hasil.affectedRows > 0) {
            console.log('berhasil menghapus '+ hasil.affectedRows + ' baris data ke mysql')
        }
    }
)