const mysql = require('mysql2')

const Connect = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    multipleStatements: true
})

Connect.connect((err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('Conectado no banco de dados')
})

module.exports = Connect