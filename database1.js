const http = require('http')
const url = require('url')
const mysql = require('mysql')
const port = 3000

// membuat koneksi ke database mysql
const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'belajar-database',
})

//menyambungkan antara nodejs & mysql
database.connect()

//belajar mengambil data dari tabel database
//ditampilkan hasil datanya di konsol
//untuk keperluan percobaan
database.query('SELECT * FROM karyawan', function(error, hasil) {
    // tampilkan error jika ada error
    if (error) throw error

    // menampilkan hasil dari script SQL yang dijalankan di atas
    // hasil yang didapat adalah data dengan format JSON
    console.log(hasil)
    console.log('===========')

    // mencoba menampilkan data yg diperlukan saja
    // karena nanti di html, itu tidak bisa menampilkan data dalam bentuk JSON (data mentah)
    for (let i = 0; i < hasil.length; i++) {
        console.log(hasil[i].nama + ': ' + hasil[i].jabatan)
    }
})
