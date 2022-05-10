const express = require('express')
const salariesController = require('../controllers/salaries')
const router = express.Router()

router.get('/', salariesController.getSalaries)



module.exports = router