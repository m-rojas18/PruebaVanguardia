import { Router } from "express";
import { newStudent, deleteStudent } from "../controllers/StudentController";

const router = Router()

router.post('/createStudent', newStudent)
router.delete('/deleteStudent', deleteStudent)

export default router