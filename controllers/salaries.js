// const mysql2 = require('mysql2');
// const pool = require('../connections');
// needs handleSQLError require

const getSalaries = (req, res) => {
    pool.query('SELECT * FROM employees JOIN salaries', (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
    })
} 
// module.exports = {
    // getSalaries

// };