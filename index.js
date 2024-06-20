const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'mysql-1378c953-sahilnihalchandani83-8bab.j.aivencloud.com',
    user: 'avnadmin',
    password: 'AVNS_WzxmT2sISJ5RE7mw5mz',
    database: 'mayank',
    port:27510
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL connected...');
});

// API routes
app.get('/employees', (req, res) => {
    let sql = 'SELECT * FROM cdetails';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
