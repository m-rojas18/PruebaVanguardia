import Student from '../models/StudentSchema'

export const newStudent = (req, res) => {
    const student = new Student({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
    })

    try {
        student.save()
        res.status(200).json({student})
    } catch (error) {
        res.status(500).json({error: error})
    }
}

export const deleteStudent = (req, res) => {
    try {
        Student.findOneAndRemove({email: req.body.email}).then((_) => {
            res.status(200).json({status: 'Eliminado'})
        })
    } catch (error) {
        res.status(500).json({error:e})
    }
}

