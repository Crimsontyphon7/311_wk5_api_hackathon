const express = require('express');
const app = express();

const employeesRouter = require('./routers/employees');
const departmentsRouter = require('./routes/departments');
const salariesRouter = require('./routes/salaries');
const titlesRouter = require('./routes/titles');

const port = process.env.PORT || 4001;


app.use(employeesRouter);
app.use(departmentsRouter);
app.use(salariesRouter);
app.use(titlesRouter);

app.get('/', (req, res) => {
    res.send('Welcome to our API!')
  })

app.listen(port, () => {
    console.log(`Web server is listening on port ${port}!`);
   });