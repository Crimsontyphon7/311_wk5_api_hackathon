// const mysql2 = require('mysql2');
// const pool = require('../connections');
// needs handleSQLError require


// Create a new folder called "controllers" and a new file called "employees.js". Export the controller and import it into the "routes/employees.js" file. This is where we will put all of the logic for interacting with the data


// Create a function in the controller called "getEmployees". It should be called by the default "/" route. For now, leave the logic the same: res.send("getting employees...")


//Update the getEmployees function in the controller so that it calls the database, selecting all fields from the employees table but limiting the results to 50
const getEmployees = (req, res) => {
    let sql = `SELECT * FROM employees LIMIT 50`;
    
    pool.query('SELECT * FROM employees LIMIT 50', (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
    })
} 

// Create a function in the controller called "getEmployeesById". It should be called by the "/:id" route. For now, leave the logic the same: res.send("getting employees...")
//Update the getEmployeesById function so that it calls the database, selecting all fields from the employees table where the emp_no matches the id query parameter

const getEmployeesById = (req, res) => {
    
    let sql = `SELECT * FROM employees where emp_no=? LIMIT 1`;

    pool.query(`SELECT * FROM employees WHERE emp_no = ${req.params.id} LIMIT 1`, (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
    })
} 

// getEmployeesByFirstName
//www

// Create a function called "getEmployeesByFirstName. It should select all fields from the employees table where the first_name matches the /:first_name query parameter"

const getEmployeesByFirstName = (req, res) => {
    pool.query("SELECT * FROM employees WHERE first_name = req.params.first_name", (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
    })
}



// module.exports = {
    // getEmployees,
    // getEmployeesById
    // getEmployeesByFirstName

// };