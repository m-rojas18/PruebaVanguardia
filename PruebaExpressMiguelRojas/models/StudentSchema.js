import mongoose, {Schema} from "mongoose"

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    age : {
        type: Number,
    },
    isActive: {
        type: Boolean,
        required: true,
        default: true,
    },
})


const Student = mongoose.model('Student', studentSchema)
export default Schema