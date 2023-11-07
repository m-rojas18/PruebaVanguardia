const  Student = require( "../models/StudentSchema");


//Crear nuevo estudiante
exports.newStudent =  async (req, res) => {
    const new_student = new Student({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        isActive: req.body.isActive,
    })

    try {
        await new_student.save().then(() => res.status(200).json({student}))
        
    } catch (error) {
        res.status(500).json({error: error})
    }
}

//obtener lista de estudiantes

//actualizar datos de estudiante

//


