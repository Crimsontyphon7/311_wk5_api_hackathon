const mysql2 = require('mysql2');
const pool = require('../connections');
const { handleSQLError } = require('../mysql/error')

const getTitles = (req, res) => {
    pool.query('SELECT * FROM employees JOIN titles', (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
    })
} 
module.exports = {
    getTitles

};