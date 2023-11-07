const express = require("express")
const { newStudent } = require("../controllers/students.controller")

const router = express.Router()

//Ruta crear usuario
router.post('/crear-estudiante', newStudent);


module.exports = router;