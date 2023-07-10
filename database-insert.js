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
    `INSERT INTO 
    karyawan (nip, nama, jabatan, tanggal_join, agama_id) 
    VALUES
    (101010, 'Messi', 'Striker', '2023-11-30', 2);`,
    function(error, hasil) {
        if (error) throw error

        if (hasil.affectedRows > 0) {
            console.log('berhasil memasukkan '+ hasil.affectedRows + ' baris data ke mysql')
        }
    }
)