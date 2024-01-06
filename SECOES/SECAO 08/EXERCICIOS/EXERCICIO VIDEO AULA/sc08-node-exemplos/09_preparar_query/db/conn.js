const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "zb123456",
    database: "nodemysql",
});

module.exports = pool