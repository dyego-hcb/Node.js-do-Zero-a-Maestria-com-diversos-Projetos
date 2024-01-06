const express = require('express');
const exphb = require('express-handlebars');
const mysql = require('mysql');

const app = express();

app.engine('handlebars', exphb.engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', (req, res) => 
{
    res.render('home');
});

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'zb123456',
    database: 'nodemysql'
});

conn.connect(function(err)
{
    if(err)
    {
        console.log(err);
    }
    console.log('Database MySQL Connect !!');

    app.listen(3000);
});